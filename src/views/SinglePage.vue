<template>
  <div id="top" class="bg-slate-900 min-h-screen relative">
    <header-main />
    <main-section>
      <section id="content">
        <div
          class="
            flex
            justify-center
            items-center
            sm:min-h-screen-1_3
            w-full
            mx-auto
            sm:max-w-screen-sm
            md:max-w-screen-md
            lg:max-w-screen-lg
            xl:max-w-screen-xl
            2xl:max-w-screen-xl
          "
        >
          <div class="px-4 min-w-2/3">
            <div class="relative z-10 overflow-hidden rounded-lg bg-slate-800">
              <div class="-mx-4 flex flex-wrap">
                <div
                  class="w-full px-4 lg:pr-8 lg:w-5/12 xl:w-1/3 items-center"
                >
                  <div
                    class="
                      relative
                      h-full
                      z-10
                      flex flex-col
                      justify-between
                      py-20
                      pr-5
                      lg:text-right
                      bg-indigo-600
                    "
                  >
                    <div class="mb-16 lg:mb-56">
                      <div
                        class="
                          mb-4
                          text-4xl
                          pl-4
                          font-bold
                          text-white
                          sm:text-5xl
                        "
                      >
                        {{ t("single.title") }}
                      </div>
                      <div class="absolute bottom-4 right-4">
                        <div class="mt-16 mb-16">
                          <p class="text-lg font-bold text-white sm:text-xl">
                            <span class="block">
                              {{ t("single.email") }}
                            </span>
                            <span class="block">
                              {{ t("single.phone") }}
                            </span>
                            <span class="block">
                              {{ t("single.open_days") }}
                            </span>
                            <span class="block">
                              {{ t("single.open_hours") }}
                            </span>
                          </p>
                        </div>
                        <div>
                          <p class="mb-3 text-xl font-bold text-white">
                            {{ t("single.follow") }}
                          </p>
                          <div
                            class="flex items-center space-x-1 lg:justify-end"
                          >
                            <a
                              href="javascript:void(0)"
                              class="text-white hover:text-white/80"
                            >
                              <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-white hover:text-white/80"
                            >
                              <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-white hover:text-white/80"
                            >
                              <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a
                              href="javascript:void(0)"
                              class="text-white hover:text-white/80"
                            >
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
                  <div class="pt-20 pb-8">
                    <div class="mb-12 max-w-[410px]">
                      <h2
                        class="mb-4 text-4xl font-bold text-white sm:text-5xl"
                      >
                        {{ t("single.subtitle") }}
                      </h2>
                      <p class="text-white text-xl">
                        {{ t("single.slogan") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main-section>
    <footer-main class="absolute" />
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

import { useI18n } from "vue-i18n";

const {t} = useI18n()


</script>
