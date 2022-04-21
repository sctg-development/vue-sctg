import { resolveComponent } from "vue";
import {
  isAllowed,
  parseTokenFromAuthorizationHeader,
} from "../../src/auth0/TokenHelper";

const LIST_ALL_SHORT_URL = "list:all_short_url";

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
     * 2c - check if LIST_ALL_SHORT_URL is present in permissions[]
     */
    const hasPermission: boolean = await isAllowed(
      jwtToken,
      auth0Domain,
      Date.now() / 1000,
      LIST_ALL_SHORT_URL
    );
    if (hasPermission !== false) {
      const longsUrl:
        | { name: string; value: string; metadata: string | null }[]
        | unknown[] = await env.SHORTURL.list().then((list) => {
        /**
         * request KV get in parallel
         */
        return Promise.all(
          list.keys.map(async (key) => {
            const getResult = await env.SHORTURL.getWithMetadata(key.name);
            return await new Promise((resolve) => resolve({
              name: key.name,
              value: getResult.value,
              metadata: getResult.metadata,
            })
            );
          })
        );
      });
      return new Response(JSON.stringify(longsUrl, null, 3));
    } else {
      return new Response(
        JSON.stringify({ error: "JWT invalid" }, null, 3),
        null
      );
    }
  } else {
    return new Response(
      JSON.stringify(
        { error: "You must provide JWT in 'Authorization: Bearer' header" },
        null,
        3
      ),
      null
    );
  }
};
