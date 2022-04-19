import { isAllowed } from "../../src/auth0/TokenHelper";
export const onRequestPost: PagesFunction<{
  SHORTURL: KVNamespace;
  AUTH0_DOMAIN: string;
}> = async ({ request, env }) => {
  const auth0Domain: string = env.AUTH0_DOMAIN;
  const headers: Headers = await request.headers;
  const authorizationHeader: string = request.headers.get("Authorization");
  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    const jwtToken: string = authorizationHeader.substring(
      7,
      authorizationHeader.length
    );
    const hasPermission:boolean = await isAllowed(
      jwtToken,
      auth0Domain,
      Date.now() / 1000,
      "list:all_short_url"
    );
    if (hasPermission !== false) {
      return new Response(JSON.stringify({ access: "list:all_short_url" }, null, 3));
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
