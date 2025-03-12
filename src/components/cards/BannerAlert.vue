<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div v-if="openBanner" class="block w-full fixed bottom-0 bg-indigo-600 z-50">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-indigo-800">
            <!-- Heroicon name: outline/speakerphone -->
            <i class="fa-solid fa-bullhorn text-white"></i>
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden">{{t("banner.short")}}</span>
            <span class="hidden md:inline">
              {{t("banner.long")}}
            </span>
          </p>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
           @click="openBanner = false"
            type="button"
            class="
              -mr-1
              flex
              p-2
              rounded-md
              hover:bg-indigo-500
              focus:outline-none focus:ring-2 focus:ring-white
              sm:-mr-2
            "
          >
            <span class="sr-only">Dismiss</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
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
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
const {t} = useI18n({})
const openBanner = ref(true);
</script>
