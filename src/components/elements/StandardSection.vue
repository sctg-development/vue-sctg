<template>
  <section :id="id">
    <div
      class="
        w-full
        mx-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        px-10
      "
    >
      <div class="py-1 border-b border-white px-1.5 border-opacity-10">
        <div class="-mx-4 flex">
          <div class="w-full px-4">
            <h2 class="mb-5 text-3xl font-bold text-white">
              {{ title }}
            </h2>
          </div>
        </div>
      </div>
      <slot />
    </div>
  </section>
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
    props:{
        id: String,
        title: String,
    },
}
</script>