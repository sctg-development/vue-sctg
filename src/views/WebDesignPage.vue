<template>
  <!-- based on https://nft-tailwind.preview.uideck.com/support -->
  <div id="top" class="bg-slate-900 min-h-screen relative">
    <header-main />
    <main-section>
      <section id="content">
        <div class="
          flex
          items-center
          sm:min-h-screen-1_3
          w-full
          mx-auto
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-screen-xl
        ">
          <div class="px-4">
            <div class="relative z-10 overflow-hidden rounded-lg bg-slate-800">
              <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4 lg:pr-8 lg:w-5/12 xl:w-1/3 items-center">
                  <div class="
                    relative
                    z-10
                    flex flex-col
                    justify-between
                    py-20
                    pr-5
                    lg:text-right
                    bg-indigo-600
                  ">
                    <div class="mb-16 lg:mb-56">
                      <div class="mb-4 text-4xl pl-4 font-bold text-white sm:text-5xl">
                        {{ t("message.web_design") }}
                      </div>
                      <div class="absolute bottom-4 right-4">
                        <div class="mt-16 mb-16">
                          <p class="text-lg font-bold text-white sm:text-xl">
                            <span class="block">
                              {{ t("websites.webdesign_email") }}
                            </span>
                            <span class="block">
                              {{ t("websites.webdesign_phone") }}
                            </span>
                            <span class="block">
                              {{ t("websites.webdesign_open_days") }}
                            </span>
                            <span class="block">
                              {{ t("websites.webdesign_open_hours") }}
                            </span>
                          </p>
                        </div>
                        <div>
                          <p class="a2D text-xl font-bold text-white">
                            {{ t('websites.follow') }}
                          </p>
                          <div class="flex items-center space-x-1  lg:justify-end">
                            <a href="javascript:void(0)" class="text-white hover:text-white/80">
                              <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="javascript:void(0)" class="text-white hover:text-white/80">
                              <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="javascript:void(0)" class="text-white hover:text-white/80">
                              <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="javascript:void(0)" class="text-white hover:text-white/80">
                              <i class="fa-brands fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span class="absolute left-3 bottom-6 -z-10">
                        <img src="../assets/img/dots.svg" />
                      </span>
                      <span class="absolute right-0 bottom-1/2 -z-10">
                        <img src="../assets/img/circle.svg" />
                      </span>
                      <span class="absolute left-1/4 bottom-1/2 -z-10">
                        <img src="../assets/img/triangle.svg" />
                      </span>
                      <span class="absolute left-0 bottom-1/4 -z-10">
                        <img src="../assets/img/broken.svg" />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full px-8 lg:w-5/12 xl:w-2/3">
                  <div class="text-white pt-10">
                    <h1 class="text-3xl font-semibold">
                      {{ t('websites.title') }}
                    </h1>
                    <p class="pt-8">
                      {{ t('websites.subtitle_1') }}
                    </p>
                    <p class="py-8">
                      {{ t('websites.subtitle_2') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main-section>

    <standard-section class="py-12 pt-12" id="web-content" :title="t('message.web_design')">
      <div class="pt-10 px-4 sm:px-8 lg:px-20 text-white flex flex-wrap justify-between">
        <type-4-card icon="text-blue-500 fab fa-connectdevelop" :text="t('websites.webdev')"
          :title="t('websites.web_development')" class="w-full lg:w-1/2 2xl:w-1/3" />
        <type-4-card icon="text-emerald-600 fab fa-searchengin" :text="t('websites.seo')"
          :title="t('websites.seo_title')" class="w-full lg:w-1/2 2xl:w-1/3" />
        <type-4-card icon="text-purple-500 fa-solid fa-handshake" :text="t('websites.together')"
          :title="t('websites.together_title')" class="w-full lg:w-1/2 2xl:w-1/3" />
      </div>
    </standard-section>
    <standard-section class="py-12 pt-12" id="websites" :title="t('websites.latest_sites')">
      <div class="pt-10 px-20 text-white flex flex-wrap">
        <web-sites />
      </div>
    </standard-section>
    <footer-main />
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
import HeaderMain from "@/components/HeaderMain.vue";
import MainSection from "@/components/elements/MainSection.vue";
import FooterMain from "@/components/FooterMain.vue";
import StandardSection from "@/components/elements/StandardSection.vue";
import WebSites from "@/components/cards/WebSites.vue";
import Type4Card from "@/components/cards/Type4Card.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n()

</script>