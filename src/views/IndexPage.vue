<template>
  <!-- source https://nft-tailwind.preview.uideck.com/ -->
  <div id="top" class="bg-slate-900 relative">
    <header-main />
    <main-section>
      <section id="company">
        <div
          class="
            absolute
            left-0
            top-0
            -z-10
            h-full
            w-full
            bg-gradient-to-b
            from-transparent
            via-gdt-800
            to-slate-900
          "
        ></div>
        <div
          class="
            w-full
            mx-auto
            sm:max-w-screen-sm
            md:max-w-screen-md
            lg:max-w-screen-lg
            xl:max-w-screen-xl
            2xl:max-w-screen-xl
            px-4
          "
        >
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
              <div class="mb-12 max-w-[570px] lg:mb-0">
                <h1
                  class="
                    mb-1
                    font-medium
                    
                    text-white
                    font-keepcalm
                    tracking-wide
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    sm:text-4xl
                    
                  "
                >
                  {{ t("message.company") }}
                </h1>
                <p
                  class="
                    mb-8
                    text-lg
                    font-medium
                    leading-7
                    text-slate-400
                    md:pr-14
                  "
                  v-html="t('message.greetings')"
                ></p>
                <div class="flex flex-wrap items-center">
                  <router-link
                    :to="{path:'/', hash:'#features' ,query:{lang: locale}}"
                    class="
                      mr-5
                      mb-5
                      items-center
                      justify-center
                      rounded-md
                      border-2 border-indigo-600
                      leading-7
                      p-4
                      flex-wrap
                      text-base
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      bg-indigo-600
                      hover:bg-indigo-700
                    "
                  >
                    {{ t("message.explore_now") }}
                  </router-link>
                  <router-link
                    :to="{path:'/contact', hash:'#top',query:{lang: locale}}"
                    class="
                      mb-5
                      items-center
                      justify-center
                      rounded-md
                      border-2 border-white
                      p-4
                      flex-wrap
                      text-base
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:border-indigo-600 hover:leading-7
                    "
                  >
                    {{ t("message.contact_us") }}
                  </router-link>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2">
              <div class="text-center">
                <img
                  :src="getCloudinaryImg('Logo_SCTG_carre_3D').toURL()"
                  alt="hero image"
                  class="mx-auto max-w-full contrast-125 brightness-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main-section>

    <section id="services" class="pt-8">
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
        <div class="mb-7 py-1 border-b border-white px-1.5 border-opacity-10">
          <div class="justify-between sm:flex">
            <h2 class="mb-4 text-3xl font-medium leading-none text-white">
              {{ t("message.services") }}
            </h2>
            <router-link
              :to="{path:'/web', hash:'#websites',query:{lang: locale}}"
              class="
                mb-5
                items-center
                justify-center
                rounded-md
                bg-indigo-600
                px-6
                py-2
                text-base
                font-semibold
                text-white
                ease-in-out
                duration-150
                hover:opacity-90
              "
            >
              {{t('message.view_all')}}
            </router-link>
          </div>
        </div>
        <div id="activities" class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 lg:w-1/2">
            <web-design-card />
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <server-administration-card />
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <erp-integration-card />
          </div>
        </div>
      </div>
    </section>

    <section id="web-design" class="pt-12">
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
                {{ t("slide.web_creations") }}
              </h2>
            </div>
          </div>
        </div>
        <div class="relative">
          <tiny-slider>
            <web-sites />
          </tiny-slider>
        </div>
      </div>
    </section>
    <section id="features" class="pb-900px sm:pb-800px md:pb-300px 2xl:pb-0 pt-90px">
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
        <div class="mx-auto mb-10 max-w-[650px] text-center">
          <h2
            class="mb-4 text-4xl font-semibold leading-5 text-white sm:text-5xl"
          >
            {{t('message.core_activities')}}
          </h2>
          <p class="text-lg font-medium text-zinc-400">
            {{ t("message.core_content") }}
          </p>
        </div>
        <div class="mt-6 -mx-4 flex flex-wrap h-[500px] px-7">
          <type4-card
            class="pb-4"
            icon="text-orange-500 fa-solid fa-handshake"
            :text="t('message.design_content')"
            :title="t('message.web_design')"
          />
          <type4-card
            class="pb-4"
            icon="text-amber-600 fa-solid fa-wifi"
            :text="t('message.seo_content')"
            :title="t('websites.seo_title')"
          />
          <type4-card
            class="pb-4"
            icon="text-green-500 fa-solid fa-code-compare"
            :text="t('message.admin_content')"
            :title="t('message.admin')"
          />
          <type4-card
            class="pb-4"
            icon="text-indigo-600 fa-solid fa-tag"
            :text="t('message.dev_content')"
            :title="t('message.dev')"
          />
        </div>
      </div>
    </section>
    <section id="team" class="pt-5">
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
                {{ t("message.team") }}
              </h2>
            </div>
          </div>
        </div>
        <div class="relative">
          <tiny-slider>
            <team-slides />
          </tiny-slider>
        </div>
      </div>
    </section>

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
import TeamSlides from "@/components/cards/TeamSlides.vue";
import Type4Card from "@/components/cards/Type4Card.vue"
import TinySlider from "@/components/elements/TinySlider.vue";
import WebDesignCard from "@/components/cards/WebDesignCard.vue";
import ServerAdministrationCard from "@/components/cards/ServerAdministrationCard.vue";
import ErpIntegrationCard from "@/components/cards/ErpIntegrationCard.vue";
import WebSites from "@/components/cards/WebSites.vue";
import { getCloudinaryImg } from "@/utilities/utilities";
import { useI18n } from "vue-i18n";
const {locale,t} = useI18n()
</script>
