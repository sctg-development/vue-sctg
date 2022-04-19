import * as jose from "jose";

import jwks from "../../sctg-jwks.json";
const x509cert: string = `-----BEGIN CERTIFICATE-----\n${jwks.keys[0].x5c}\n-----END CERTIFICATE-----`;
const algorithm: string = "RS256";

/** 
 * @param token JWT token as string
 * @param issuer Auth0 domain
 * @param now number of seconds from 01/01/1970
 * @returns false if token is invalid or a valid JWTVerifyResult
*/
export const verifyToken: Function = (
  token: string,
  issuer: string,
  now: number
): Promise<boolean | jose.JWTVerifyResult> => {
  return new Promise((resolve) => {
    jose.importX509(x509cert, algorithm).then((pubkey) => {
      jose
        .jwtVerify(token, pubkey)
        .then((jwt) => {
          if (
            jwt.payload !== undefined &&
            jwt.payload.iat !== undefined &&
            jwt.payload.exp !== undefined &&
            `https://${issuer}/` == jwt.payload.iss &&
            jwt.payload.iat < now &&
            jwt.payload.exp > now
          ) {
            resolve(jwt);
          } else {
            resolve(false);
          }
        })
        .catch(() => {
          resolve(false);
        });
    });
  });
};
