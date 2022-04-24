import * as jose from "jose";

import jwks from "../../sctg-jwks.json";
const x509cert = `-----BEGIN CERTIFICATE-----\n${jwks.keys[0].x5c}\n-----END CERTIFICATE-----`;
const algorithm = "RS256";

export const ADD_SHORT_URL = "add:any_short_url";
export const LIST_ALL_SHORT_URL = "list:all_short_url";
/**
 * @param token JWT token as string
 * @param issuer Auth0 domain
 * @param now number of seconds from 01/01/1970
 * @returns false if token is invalid or a valid JWTVerifyResult
 */
export const verifyToken = (
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

/**
 * @param authorizationHeader value part of the 'Authorization: Bearer edkOsdd…' header ex: 'Bearer edkOsdd…'
 * @returns null if it fails or the parsed token
 */
export const parseTokenFromAuthorizationHeader = (
  authorizationHeader: string | null
): string => {
  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    const jwtToken: string = authorizationHeader.substring(
      7,
      authorizationHeader.length
    );
    return jwtToken;
  }
  return null;
};

export const checkToken = (promisedToken:Promise<{id_token:string, access_token:string}>):void => {
  Promise.all([
    jose.importX509(x509cert, algorithm),
    promisedToken,
  ]).then((values) => {
    //const pubkey = values[0];
    const token = values[1];
    const access_token:string = token.access_token;
    //const id_token:string = token.id_token;
    return verifyToken(access_token,jwks.domain,Date.now()/1000)
  });
}

/**
 * @param token JWT token as string
 * @param issuer Auth0 domain
 * @param now number of seconds from 01/01/1970
 * @param permission string or array of strings
 * @returns true if user has required permission, false if not
 */
export const isAllowed = (
  token: string,
  issuer: string,
  now: number,
  permission: string | string[]
): Promise<boolean> => {
  let requiredPermissions: string[] = [];
  if (typeof permission === "string") {
    //permission is a string not a string array
    requiredPermissions.push(permission);
  } else {
    requiredPermissions = permission;
  }
  return new Promise((resolve) => {
    verifyToken(token, issuer, now).then(
      (jwt: boolean | jose.JWTVerifyResult) => {
        if (typeof jwt != "boolean") {
          let isAllowed = true;
          if (jwt.payload.permissions !== undefined) {
            const permissions: string[] = jwt.payload.permissions as string[];
            requiredPermissions.forEach((requiredPermission) => {
              const permissionPosition: number =
                permissions.indexOf(requiredPermission);
              permissionPosition >= 0 && isAllowed
                ? (isAllowed = true)
                : (isAllowed = false);
            });
            resolve(isAllowed);
          }
        } else {
          resolve(jwt);
        }
      }
    );
  });
};
