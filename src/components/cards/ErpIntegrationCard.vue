<template>
  <div
    class="
      mb-10
      rounded-xl
      border border-slate-600
      bg-slate-700
      p-3
      md:p-3
      lg:p-5
      xl:p-5
    "
  >
    <div class="-mx-3 flex">
      <div class="w-2/3 mx-3">
        <div class="mb-6 w-full">
          <img
            :src="getCloudinaryImg('dolibarr-erp', 300).toURL()"
            alt="Web design"
            class="rounded-xl w-full"
          />
        </div>
      </div>
      <div class="w-1/3 mx-3">
        <div class="mb-6 w-full bg-slate-300 rounded-lg">
          <img
            :src="getCloudinaryImg('dolibarr-mac', 200,112).toURL()"
            alt="ERP Integration"
            class="w-full rounded-lg"
          />
        </div>
        <div class="mb-6 w-full bs-slate-100">
          <img
            src="../../assets/img/mysql-php-nginx.svg"
            alt="collection"
            class="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
    <div class="mb-3 flex items-center justify-between">
      <h3>
        <a
          href="javascript:void(0)"
          class="
            text-lg
            font-medium
            text-white
            sm:text-xl
            md:text-2xl
            lg:text-xl
            xl:text-2xl
          "
        >
          {{ t("services.erp_integration") }}
        </a>
      </h3>
      <button
        class="inline-flex font-bold items-center rounded-md bg-white px-2 py-1"
      >
        <img src="../../assets/img/heart.svg"/>
        <span class="pl-1 text-xs font-semibold text-zinc-900"> 12 </span>
      </button>
    </div>
    <div class="flex items-center">
      <div class="mr-3 h-[46px] w-full max-w-46px overflow-hidden rounded-md">
        <img
         :src="getCloudinaryImg('web-design-tools', 50).toURL()"
          alt="Web design tools"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="w-full">
        <h4 class="text-base font-semibold text-white">
          erp@…
          <span class="block text-sm font-medium text-zinc-400"> SCTG Team </span>
        </h4>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
import { useI18n } from 'vue-i18n';
const {t} = useI18n({})
import {
  getCloudinaryImg,
} from "@/utilities/utilities";

</script>