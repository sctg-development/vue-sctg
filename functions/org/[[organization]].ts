import { PagesFunction, EventContext } from "@cloudflare/workers-types";
const axios = require('axios');

/**
 * Function to fetch GitHub api at https://api.github.com/orgs/{organization}/repos
 * which answers a json response in a array of objects
 * each object contains the following properties:
 * - id: number
 * - stargazers_count: number
 * @param organization
 * @returns the sum of stargazers_count
 */
async function getTotalStargazersForOrg(organization: string
):Promise<number> {
    const url = `https://api.github.com/orgs/${organization}/repos?per_page=100`;
    const response = await axios.get(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const data = response.data;
    return data.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
}

export const onRequestGet = async ({ params }: EventContext<any, "organization", any>) => {
    if (params.organization && params.organization.length === 2) {
        const organization = params.organization[0];
        const method = params.organization[1];
        if (organization === "highcanfly" || organization === "sctg-development") {
            if (method === "stars") {
                const sum = await getTotalStargazersForOrg(organization);
                return new Response(`The sum of stargazers_count is ${sum}`, { status: 200 });
            }
            return new Response("Hello", { status: 200 });
        }
    }
    return new Response("Error", { status: 500 });
} 
