<template>
  <!-- source https://nft-tailwind.preview.uideck.com/ -->
  <div id="top" class="bg-slate-900 relative">
    <header-main />
    <main-section />
    -->
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
                  text-4xl
                  font-medium
                  leading-5
                  text-white
                  font-keepcalm
                  tracking-wide
                  md:text-5xl
                  lg:text-6xl
                  sm:text-4xl
                "
              >
                {{ $t("message.company") }}
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
                v-html="$t('message.greetings')"
              ></p>
              <div class="flex flex-wrap items-center">
                <a
                  href="explore-items.html"
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
                  {{ $t("message.explore_now") }}
                </a>
                <a
                  href="create-item.html"
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
                  {{ $t("message.contact_us") }}
                </a>
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
              {{ $t("message.services") }}
            </h2>
            <a
              href="javascript:void(0)"
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
              View All
            </a>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
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
                {{ $t("slide.web_creations") }}
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
    <section id="features" class="pt-[90px]">
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
            Core Features
          </h2>
          <p class="text-lg font-medium text-zinc-400">
            {{ $t("dev.lorem50") }}
          </p>
        </div>
        <div class="mt-6 -mx-4 flex flex-wrap px-7">
          <type-4-card
            :imageUrl="require('@/assets/img/icon-wallet.svg')"
            :text="$t('dev.lorem9')"
            title="Contact"
          />
          <type-4-card
            :imageUrl="require('@/assets/img/icon-collection.svg')"
            :text="$t('dev.lorem9')"
            title="Collection"
          />
          <type-4-card
            :imageUrl="require('@/assets/img/icon-mountain.svg')"
            :text="$t('dev.lorem9')"
            title="Core features"
          />
          <type-4-card
            :imageUrl="require('@/assets/img/icon-tag.svg')"
            :text="$t('dev.lorem9')"
            title="Tag list"
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
                {{ $t("message.team") }}
              </h2>
            </div>
          </div>
        </div>
        <div class="relative">
          <tiny-slider>
            <mini-slides />
          </tiny-slider>
        </div>
      </div>
    </section>
    <!--
    <section class="w-full pt-12">
      <div
        class="
          w-full
          mx-auto
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-screen-xl
          px-10
        "
      >
        <div class="mb-7 py-1 border-b border-white px-1.5 border-opacity-10">
          <div class="justify-between sm:flex">
            <h2 class="mb-4 text-3xl font-medium leading-none text-white">
              Today's Picks
            </h2>
            <a
              href="javascript:void(0)"
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
              View All
            </a>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
          <type-3-card />
          <type-3-card />
          <type-3-card />
          <type-3-card />
          <type-3-card />
          <type-3-card />
          <type-3-card />
          <type-3-card />
          <div class="w-full px-4">
            <div class="pt-8 text-center">
              <a
                href="javascript:void(0)"
                class="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  border-2 border-white
                  py-3
                  px-7
                  text-base
                  font-semibold
                  text-white
                  ease-in-out
                  duration-150
                  hover:border-indigo-600 hover:bg-indigo-600
                "
              >
                Load More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->

    <footer-main />
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";
import MainSection from "@/components/elements/MainSection.vue";
import FooterMain from "@/components/FooterMain";
import MiniSlides from "@/components/cards/MiniSlides";
import TinySlider from "@/components/elements/TinySlider";
import WebDesignCard from "@/components/cards/WebDesignCard.vue";
import ServerAdministrationCard from "@/components/cards/ServerAdministrationCard.vue";
import ErpIntegrationCard from "@/components/cards/ErpIntegrationCard.vue";
//import Type3Card from "@/components/cards/Type3Card.vue";
import WebSites from "@/components/cards/WebSites.vue";
import Type4Card from "@/components/cards/Type4Card.vue";
import { getCloudinaryImg } from "@/utilities/utilities.js";

export default {
  name: "App",
  data() {
    this.$route.query.lang !== undefined
      ? this.$route.query.lang == "fr" || this.$route.query.lang == "fr"
        ? (this.$i18n.locale = this.$route.query.lang)
        : ""
      : "";
    return { getCloudinaryImg };
  },
  components: {
    HeaderMain,
    MainSection,
    MiniSlides,
    TinySlider,
    //   Type3Card,
    Type4Card,
    FooterMain,
    WebDesignCard,
    ServerAdministrationCard,
    ErpIntegrationCard,
    WebSites,
  },
  methods: {},
};
</script>
<style>
</style>