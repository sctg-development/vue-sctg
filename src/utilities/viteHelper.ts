/*!
=========================================================
* © 2022 Ronan LE MEILLAT for SCTG Développement
=========================================================
This website use:
- Vuejs v3
- Font Awesome
- And many others
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