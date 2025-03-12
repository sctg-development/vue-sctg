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

import { AvailableLanguage, langFlags } from "@/main";

/**
 * 
 * @param url absolute path of asset (must begin with @/assets/)
 * @returns a vite transformed url string
 */
export function $require(url: string): string {
  const correctedURL = new URL(`../assets/${url.replace('@/assets/', '')}`, import.meta.url || ".").href
  return correctedURL
}

export function $requireLangImg(lang: AvailableLanguage): string {
  switch (lang) {
    case "fr":
      return langFlags["fr"].img;
    case "en":
      return langFlags["en"].img;
    case "es":
      return langFlags["es"].img;
    default:
      return langFlags["fr"].img;
  }
}