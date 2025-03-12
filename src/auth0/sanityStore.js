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
/* eslint-disable no-undef */
export const sanityConf = {
    projectId: process.env.VUE_APP_SANITY_PROJECT_ID,
    dataset: process.env.VUE_APP_SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.VUE_APP_SANITY_VERSION,
  };