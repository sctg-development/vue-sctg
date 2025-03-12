<template>
  <div class="w-full px-4 md:w-1/2 xl:w-1/3 2xl:w-1/4">
    <div
      class="
        bg-slate-600
        hover:bg-gradient-to-r
        hover:from-yellow-400
        hover:via-pink-600
        hover:to-indigo-500
        mb-5
        rounded-lg
        p-2px
      "
    >
      <div class="flex items-center rounded-lg bg-slate-700 p-6">
        <div
          class="mr-5 h-[70px] w-full max-w-[70px] overflow-hidden rounded-lg"
        >
          <img
            :src="imgurl"
            :alt="title"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="w-full">
          <h3
            class="
              overflow-hidden
              text-ellipsis
              hitespace-nowrap
              text-lg
              font-semibold
              text-white
            "
          >
            {{title}}
          </h3>
          <span class="text-base font-semibold text-emerald-700">
            {{subtitle}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
export default {
  props: {
    title: String,
    subtitle: String,
    imgurl: String,
  },
  data() {
    return {};
  },
};
</script>