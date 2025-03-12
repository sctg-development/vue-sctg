/**
=========================================================
* © 2019-2025 Ronan LE MEILLAT for SCTG Development
* 
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
=========================================================
*/
import { KVNamespace, PagesFunction } from "@cloudflare/workers-types";
import { type Response as CFResponse } from "@cloudflare/workers-types";
import axios from 'axios';
import { OrgRepository } from "./types";

type Env = {
    TOKEN_FOR_GITHUB: string;
    ALLOWED_ORGANIZATIONS: string;
    KV_CACHE_ORG_STATS: KVNamespace;
    CACHE_TTL: string;
}
type Stats = {
    nbStars: number;
    nbForks: number;
    nbWatchers: number;
    nbRepos: number;
}

type Data = Record<string, unknown>;

/**
 * Function to check if the organization is allowed (organization is in the list of allowed organizations)
 * the list of allowed organizations is a comma separated string
 * @param organization
 * @param allowedOrganizations
 * @returns true if the organization is allowed
 */
function isOrganizationAllowed(organization: string, allowedOrganizations: string): boolean {
    return allowedOrganizations.split(',').includes(organization);
}

/**
 * Function to cache the stats of an organization for a certain amount of time
 * The cache is stored in the Cloudflare KV store with an automatic expiration
 */
function cacheStatsForOrg(organization: string, stats: Stats, kv: KVNamespace, ttl?: number): void {
    if (!ttl) {
        ttl = 60 * 60 * 24; // 1 day
    }
    const cacheKey = `stats_${organization}`;
    const cacheValue = JSON.stringify(stats);
    const cacheTTL = ttl;
    console.log(`Caching ${cacheKey} with value ${cacheValue} for ${cacheTTL} seconds`);
    kv.put(cacheKey, cacheValue, { expirationTtl: cacheTTL });
}

/**
 * Function to get the stats of an organization from the cache or from the GitHub API
 * @param organization
 * @param kv
 * @returns the stats of the organization
 */
async function getStatsForOrg(organization: string, kv: KVNamespace, token?: string, ttl?: number): Promise<Stats> {
    const cacheKey = `stats_${organization}`;
    const cacheValue = await kv.get(cacheKey);
    if (cacheValue) {
        console.log(`Cache hit for ${cacheKey}`);
        return JSON.parse(cacheValue);
    }
    console.log(`Cache miss for ${cacheKey}`);
    const stats = await getGlobalStatsForOrg(organization, token);
    cacheStatsForOrg(organization, stats, kv, ttl);
    return stats;
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
async function getGlobalStatsForOrg(organization: string, token?: string
): Promise<Stats> {
    const url = `https://api.github.com/orgs/${organization}/repos?per_page=500`;
    const headers = {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'Mozilla/5.0'
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    console.log(`Fetching ${url}`);
    console.log(`Headers: ${JSON.stringify(headers)}`);
    const response = await axios.get(url, {
        headers: headers
    });
    const data: OrgRepository[] = response.data;
    const stargazers_count = data.reduce((acc: number, repo: OrgRepository) => acc + (repo.stargazers_count ?? 0), 0);
    const forks_count = data.reduce((acc: number, repo: OrgRepository) => acc + (repo.forks_count ?? 0), 0);
    const watchers_count = data.reduce((acc: number, repo: OrgRepository) => acc + (repo.watchers_count ?? 0), 0);
    return {
        nbStars: stargazers_count,
        nbForks: forks_count,
        nbWatchers: watchers_count,
        nbRepos: data.length
    };
}

/**
 * Cloudflare Response Type Helper
 * this is needed because the Response type from Cloudflare is not the same as the Response type from the Fetch API
 */
function getCFResponse(body: BodyInit | null | undefined, options: ResponseInit): CFResponse {
    return new Response(body, options) as unknown as CFResponse;
}

/**
 * Cloudflare Pages function to get the stats of an organization
 * the path is /org/{organization}/stats
 * @param 
 * @returns 
 */
export const onRequestGet: PagesFunction<Env, "organization", Data> = async ({ env, params }) => {
    if (params.organization && params.organization.length === 2) {
        const organization = params.organization[0];
        const method = params.organization[1];
        if (isOrganizationAllowed(organization, env.ALLOWED_ORGANIZATIONS)) {
            if (method === "stats") {
                const stats = await getStatsForOrg(organization, 
                    env.KV_CACHE_ORG_STATS, 
                    env.TOKEN_FOR_GITHUB, 
                    parseInt(env.CACHE_TTL));
                return getCFResponse(JSON.stringify(stats), { status: 200, headers: { 'Content-Type': 'application/json' } });
            }
            return getCFResponse(JSON.stringify({ status: "Unsupported" }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
    }
    return getCFResponse(JSON.stringify({ status: "Error" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
};
