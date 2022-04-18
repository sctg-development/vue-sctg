import * as jose from "jose";

const x509cert: string =
  "-----BEGIN CERTIFICATE-----\nMIIC/TCCAeWgAwIBAgIJOB18AY7+LiSQMA0GCSqGSIb3DQEBCwUAMBwxGjAYBgNV\nBAMTEXNjdGcuZXUuYXV0aDAuY29tMB4XDTIyMDQxNTE2NTkwOVoXDTM1MTIyMzE2\nNTkwOVowHDEaMBgGA1UEAxMRc2N0Zy5ldS5hdXRoMC5jb20wggEiMA0GCSqGSIb3\nDQEBAQUAA4IBDwAwggEKAoIBAQCamYSv535mi9AlGFRzBQ0rfl1Irxi8hCWxNqii\n4QE+lF3t3bSXI50AjDwQYg1TQ1Dy4pZCmQkn9GisbiKf+zpq8y/sQ0vhYpZFNTa2\nsWbO8QJ8m/CnYNeq48IJ6u5LiJLlkcyhGSrIXKpjeZ6DnhAPkqx4Yi7T6Ul2jD/Z\n839I8reB5+q+qT/wfQWIzXMOFDAiuy3KawLzqLjkmIiAQpbUewEs8UBkrVMMC4SK\nyWEG0CYCGMRYKukCpNs2p0xcoS0FS5MuIzidjX+GaWbgbfm54kkiTvRpX89/gZN5\n28FLRp7aOT6a4OFJ2vxzfeaIgU7BrzBSTNGl31/8hZi98XWTAgMBAAGjQjBAMA8G\nA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFEqVvVi3Rxt0cP+x4WwfKcq8b3FOMA4G\nA1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOCAQEAKZ9Celmd6wKDYw+UlevU\nlgxtyoIG5q+6fXbDIiiygoKESX1pCDYZX7mZGLmnIDeGRI9JyNxxnfpUHTNtGbLI\nZTbD7tOFXuPDrIatvDqjoTKHitBOab0Njuz1mAgxwXzlYLAdmC5OqD9z/BYYUCP+\nSSIP016J2ImyQ9Bn1IsX7lUIlucwuTkxQ0R5ENF75WZjx+ZRaipmnysTcErRe1V6\nGXt/ss75hZGOCFFGzakyJORYpmTkKrU/vai2M8ACvWW2gqPjsqGz5MaA4uofSDem\nPZnLn9NFqLPvrN7NsTcctlGEyr46LRXy7xk64E1ZmWUPIPLGJTisEqn0xMiGN7ef\nbg==\n-----END CERTIFICATE-----";
const algorithm: string = "RS256";

export const verifyToken: Function = (
  token: string,
  issuer: string,
  now:number
): Promise<boolean | jose.JWTVerifyResult> => {
  return new Promise((resolve) => {
    jose.importX509(x509cert, algorithm).then((pubkey) => {
      jose
        .jwtVerify(token, pubkey)
        .then((jwt) => {
          if( (`https://${issuer}/` == jwt.payload.iss) && (jwt.payload.iat < now) && (jwt.payload.exp > now)) {
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
