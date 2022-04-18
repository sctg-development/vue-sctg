import * as jose from "jose";
import { verifyToken } from "../../src/auth0/verifyToken.js";

export const onRequestPost: PagesFunction<{ SHORTURL: KVNamespace, AUTH0_DOMAIN:string }> = async ({
  request,
  env,
}) => {
  const auth0Domain:string = env.AUTH0_DOMAIN;
  const headers: Headers = await request.headers;
  const authorizationHeader: string = request.headers.get("Authorization");
  if (authorizationHeader) {
    if (authorizationHeader.startsWith("Bearer ")) {
      const jwtToken: string = authorizationHeader.substring(
        7,
        authorizationHeader.length
      );
      verifyToken(jwtToken,auth0Domain,Date.now()/1000).then((jwtVerified) => {
        console.log(jwtVerified);
      });
    } else {
      //Error
    }
  }

  const body = await request.json();
  return new Response("ERROR NO SHORT LINK PROVIDED", null);
};
