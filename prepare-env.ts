import gitlog, { GitlogOptions } from "gitlog";
import fs from "fs";
import https from "https";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import packageJsonLock from "./package-lock.json" with { type: "json" };
import { LineCount } from "@sctg/code-stats";

const results = await LineCount.countLines(['src','api/add-short-url','api/autoroute','api/common','api/list-short-url','api/redirect'])
fs.writeFile(
  "./codeStats.json",
  JSON.stringify(results),
  "utf8",
  function (err) {
    if (err) return console.log(err);
  }
);

// Option 1: Just use the function, returned commit type has specified fields
const commits = await gitlog({
  repo: ".",
  number: 1,
  fields: ["authorDate"],
} as GitlogOptions);

const commit = {
  vue_sctg: (new Date(commits[0].authorDate)),
};

process.env.VUE_APP_GIT_LAST_COMMIT = new Date(commits[0].authorDate).toLocaleDateString();
fs.writeFile('./commit.json',
  JSON.stringify(commit),
  'utf8', err => {
    if (err) return console.log(err);
  }
);


/*generate auth0-conf.json*/
/*generate auth0-conf.json*/
const auth0Conf = {
  "auth0SdkVersion": "2.1.3", //packageJsonLock.dependencies["@auth0/auth0-spa-js"].version,
  "domain": process.env.AUTH0_DOMAIN,
  "clientId": process.env.AUTH0_CLIENT_ID,
  "useRefreshTokens": true,
  "cacheLocation": "localstorage",
  "authorizationParams": {
    "scope": "openid email profile",
    "audience": "https://sctg.api"
  }
};

fs.writeFile('./auth0-conf.json',
  JSON.stringify(auth0Conf),
  'utf8', err => {
    if (err) return console.log(err);
  }
);

function listDir(dir) {
  fs.readdir(dir, (err, files) => {
      files.forEach(file => {
          console.log(file);
      });
  });
}

export interface Auth0JWKS {
  alg: string;
  kty: string;
  use: string;
  n: string;
  e: string;
  kid: string;
  x5t: string;
  x5c: string[];
  domain: string;
  namespace: string;
}

async function getJwks() {
  console.log(
    `retrieve https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  );
  const url = `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`;
  return new Promise<Auth0JWKS>((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "" as string;
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          const structuredData = JSON.parse(data) as Auth0JWKS;
          structuredData.domain = process.env.AUTH0_DOMAIN as string;
          structuredData.namespace = process.env.AUTH0_NAMESPACE as string;
          resolve(structuredData);
        });
      })
      .on("error", (err) => {
        console.log(err.message);
        reject(err);
      });
  });
}

(async () => {
  const jwks = await getJwks();
  fs.writeFile('./jwks.json',
  JSON.stringify(jwks),
  'utf8', err => {
      listDir('.');
      if (err) return console.log(err);
  });
})();


/*build sanity-conf.json */
const sanityApiVersion = "2021-10-21";
const sanityConf = {
  projectId: process.env.SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: process.env.SANITY_DATASET, // this is from those question during 'sanity init'
  apiVersion: sanityApiVersion,
  useCdn: true,
};

process.env.VUE_APP_SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
process.env.VUE_APP_SANITY_DATASET = process.env.SANITY_DATASET;
process.env.VUE_APP_SANITY_VERSION = sanityApiVersion; //why cannot be read from env ???

fs.writeFile('./sanity-conf.json',
  JSON.stringify(sanityConf),
  'utf8', err => {
    if (err) return console.log(err);
  }
);

process.env.VUE_APP_ALGOLIA_SEARCH_KEY = process.env.ALGOLIA_SEARCH_KEY;
process.env.VUE_APP_ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;



