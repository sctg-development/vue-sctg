<template>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                h-full
                mb-10
                rounded-xl
                border border-slate-600
                bg-slate-700
                p-6
                ease-in-out
                duration-150
                hover:border-white hover:bg-white
              "
            >
              <div
                class="
                  mb-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFF0E9]
                "
              >
              <span class="text-3xl"><i :class="icon"></i></span>
              </div>
              <h3
                class="
                  mb-2
                  text-xl
                  font-medium
                  text-white
                  transition-all
                  ease-in-out
                  duration-150
                  group-hover:text-zinc-900
                "
                 v-html="title"
              />
              <p class="text-base font-medium text-zinc-400" v-html="text">
              </p>
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
        text: String,
        icon: String,
    },
}
</script>