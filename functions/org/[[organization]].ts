import { PagesFunction, EventContext } from "@cloudflare/workers-types";
import axios from 'axios';

type Stats = {
    nbStars: number;
    nbForks: number;
    nbWatchers: number;
    nbRepos: number;
}
/**
 * Function to fetch GitHub api at https://api.github.com/orgs/{organization}/repos
 * which answers a json response in a array of objects
 * each object contains the following properties:
 * - id: number
 * - stargazers_count: number
 * @param organization
 * @returns the stats of the organization
 */
async function getGlobalStatsForOrg(organization: string
):Promise<Stats> {
    const url = `https://api.github.com/orgs/${organization}/repos?per_page=100`;
    const response = await axios.get(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const data = response.data;
    const stargazers_count= data.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
    const forks_count = data.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);
    const watchers_count = data.reduce((acc: number, repo: any) => acc + repo.watchers_count, 0);
    return {
        nbStars: stargazers_count,
        nbForks: forks_count,
        nbWatchers: watchers_count,
        nbRepos: data.length
    };
}

/**
 * Cloudflare Pages function to get the stats of an organization
 * the path is /org/{organization}/stats
 * @param { params }: EventContext<any, "organization", any> 
 * @returns 
 */
export const onRequestGet = async ({ params }: EventContext<any, "organization", any>) => {
    if (params.organization && params.organization.length === 2) {
        const organization = params.organization[0];
        const method = params.organization[1];
        if (organization === "highcanfly-club" || organization === "sctg-development") {
            if (method === "stats") {
                const stats = await getGlobalStatsForOrg(organization);
                return new Response(JSON.stringify(stats), { status: 200 , headers: { 'Content-Type': 'application/json' }});
            }
            return new Response(JSON.stringify({status:"Unsupported"}), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
    }
    return new Response(JSON.stringify({status:"Error"}), { status: 500 , headers: { 'Content-Type': 'application/json' }});
} 
