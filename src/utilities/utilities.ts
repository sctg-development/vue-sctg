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
import { Cloudinary } from "@cloudinary/url-gen";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cloudinaryConf = {
  cloud: {
    cloudName: "sctg-development",
  },
};

const cloudinary = new Cloudinary(cloudinaryConf);

const getCloudinaryImg = (img:string, width?:number, height?:number) => {
  const _img = cloudinary.image(img);
  if (width !== undefined || height !== undefined) {
    let _fill = fill();
    if (width !== undefined) {
      _fill = _fill.width(width);
    }
    if (height !== undefined) {
      _fill = _fill.height(height);
    }
    _img.resize(_fill);
  }
  return _img.delivery(quality("auto")).format('auto');
}

const getCloudinaryResponsiveBackground = (img:string) => {
  return getCloudinaryImg(img,(Math.ceil(window.innerWidth/200)*200));
}

const cyrb53 = function(str: string, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch: number; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
  h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1>>>0);
};

export { getCloudinaryImg,getCloudinaryResponsiveBackground,cyrb53 }; 