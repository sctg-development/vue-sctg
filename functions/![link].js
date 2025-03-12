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
export async function onRequestGet(context) {
  let originUrl = (new URL(context.request.url)).origin;
  if (context.params !== undefined) {
    if (context.params.link !== undefined) {
      let req = context.params.link;
      let link = await context.env.SHORTURL.get(req);
      if (link) {
        return Response.redirect(link, 301)
      }
      else {
        return Response.redirect(originUrl, 301)
      }
    }
  }
  return new Response("ERROR NO SHORT LINK PROVIDED", null, 2);
}