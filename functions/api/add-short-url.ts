import {
  isAllowed,
  parseTokenFromAuthorizationHeader,
} from "../../src/auth0/TokenHelper";
import { customAlphabet } from "nanoid";

const ADD_SHORT_URL = "add:any_short_url";
const nanoid = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-",
  5
);

export const onRequestPost: PagesFunction<{
  SHORTURL: KVNamespace;
  AUTH0_DOMAIN: string;
}> = async ({ request, env }) => {
  const auth0Domain: string = env.AUTH0_DOMAIN;

  /**
   * 1- Read Authorization header
   * ex: Authorization: Bearer eyJhbGci…AsTy
   */
  const headers: Headers = await request.headers;
  const authorizationHeader: string = request.headers.get("Authorization");
  const jwtToken: string =
    parseTokenFromAuthorizationHeader(authorizationHeader);

  if (jwtToken !== null) {
    /**
     * 2 - Validate JWT token
     * 2a - validate signature against the certificate retrieved from https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json
     *      during vuejs lauch (via vue.config.js)
     * 2b - check if now is beetween iat (claim) and exp (expiry)
     * 2c - check if ADD_SHORT_URL is present in permissions[]
     */
    const hasPermission: boolean = await isAllowed(
      jwtToken,
      auth0Domain,
      Date.now() / 1000,
      ADD_SHORT_URL
    );
    if (hasPermission !== false) {
      console.log("permission OK");
      let slug:string = nanoid();
      let requestBody: { url: string; ttl: string | null } =
        await request.json();
      if ("url" in requestBody && "ttl" in requestBody) {
        // Add slug to our KV store so it can be retrieved later:
        await env.SHORTURL.put(slug, requestBody.url, {
          expirationTtl: Number(requestBody.ttl),
        });
        let shortenedURL = `${new URL(request.url).origin}/${slug}`;
        let responseBody = {
          message: "Link shortened successfully",
          slug,
          shortened: shortenedURL,
          ttl: Number(requestBody.ttl),
        };
        return new Response(JSON.stringify(responseBody), { status: 200 });
      }
      return new Response(
        JSON.stringify({ error: "Error during save" }, null, 3),
        { status: 500 }
      );
    } else {
      console.log("no permission");
      return new Response(JSON.stringify({ error: "JWT invalid" }, null, 3), {
        status: 403,
      });
    }
  } else {
    console.log("no token");
    return new Response(
      JSON.stringify(
        { error: "You must provide JWT in 'Authorization: Bearer' header" },
        null,
        3
      ),
      { status: 403 }
    );
  }
};
