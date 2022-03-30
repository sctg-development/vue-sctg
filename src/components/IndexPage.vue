<template>
  <!-- source https://nft-tailwind.preview.uideck.com/ -->
  <div class="bg-slate-900">
    <header-main />
    <section
      :style="{
        backgroundImage: 'url(' + reactiveBackground + ')',
      }"
      class="
        pb-24
        pt-[150px]
        bg-no-repeat bg-top bg-cover
        overflow-hidden
        z-10
        relative
      "
    >
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
      <div>
        <span class="absolute left-4 top-28 -z-10">
          <svg
            width="111"
            height="115"
            viewBox="0 0 111 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_21_53)">
              <g filter="url(#filter1_i_21_53)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M73.287 91.7144C92.1417 80.8286 98.5953 56.729 87.7122 37.8789C76.8291 19.0288 52.7314 12.568 33.8767 23.4537C15.0312 34.3342 8.56843 58.4391 19.4515 77.2892C30.3346 96.1393 54.4415 102.595 73.287 91.7144Z"
                  fill="url(#paint0_linear_21_53)"
                ></path>
              </g>
              <path
                opacity="0.7"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M69.4961 86.3067C86.2379 76.6408 91.9683 55.2418 82.3048 38.5041C72.6412 21.7663 51.244 16.0295 34.5021 25.6954C17.7685 35.3566 12.0299 56.7603 21.6934 73.498C31.357 90.2358 52.7625 95.9679 69.4961 86.3067Z"
                fill="url(#paint1_radial_21_53)"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_f_21_53"
                x="-3.83423"
                y="0.165771"
                width="114.834"
                height="114.834"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="9"
                  result="effect1_foregroundBlur_21_53"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter1_i_21_53"
                x="14.1658"
                y="10.1658"
                width="86.8342"
                height="86.8342"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dx="8" dy="-8"></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0 0.321569 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_21_53"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_21_53"
                x1="31.6878"
                y1="19.1263"
                x2="63.3007"
                y2="99.1224"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EBC77A"></stop>
                <stop offset="0.541667" stop-color="#CA3F8D"></stop>
                <stop offset="1" stop-color="#5142FC"></stop>
              </linearGradient>
              <radialGradient
                id="paint1_radial_21_53"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(56.6039 36.9093) rotate(63.4349) scale(29.0091)"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div
          class="
            absolute
            left-0
            top-0
            -z-10
            flex
            h-full
            w-full
            justify-around
            opacity-20
          "
        >
          <span
            class="
              h-full
              w-[1.1px]
              bg-gradient-to-b
              from-white
              to-transparent
              hidden
              lg:flex
            "
          >
          </span>
          <span
            class="
              h-full
              w-[1.1px]
              bg-gradient-to-b
              from-white
              to-transparent
              hidden
              lg:flex
            "
          >
          </span>
          <span
            class="
              h-full
              w-[1.1px]
              bg-gradient-to-b
              from-white
              to-transparent
              hidden
              lg:flex
            "
          >
          </span>
          <span
            class="
              h-full
              w-[1.1px]
              bg-gradient-to-b
              from-white
              to-transparent
              hidden
              md:flex
            "
          >
          </span>
          <span
            class="
              h-full
              w-[1.1px]
              bg-gradient-to-b
              from-white
              to-transparent
              hidden
              md:flex
            "
          >
          </span>
          <span
            class="
              h-full
              w-[1.1px]
              bg-gradient-to-b
              from-white
              to-transparent
              hidden
              md:flex
            "
          >
          </span>
          <span
            class="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            class="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            class="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            class="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            class="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            class="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
        </div>
      </div>
    </section>
    -->
    <section class="pt-8">
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
              {{ $t("message.servicies") }}
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
        </div>
      </div>
    </section>
    <section class="pt-12">
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
            <type-2-card
              title="innnov analysis"
              :imgurl="getCloudinaryImg('ias-web', 250, 250).toURL()"
              :miniImgurl="
                getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()
              "
              :lightboxUrl="getCloudinaryImg('ias-web').toURL()"
              author="@innov"
              authorTitle="dev"
              :baseMessage="$t('services.design_hosting')"
              value="wordpress"
            />
            <type-2-card
              title="silo smeg"
              :imgurl="getCloudinaryImg('smeg-web', 250, 250).toURL()"
              :miniImgurl="
                getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()
              "
              :lightboxUrl="getCloudinaryImg('smeg-web').toURL()"
              author="@smeg"
              authorTitle="dev"
              :baseMessage="$t('services.design_hosting')"
              value="react"
            />
            <type-2-card
              title="high can fly"
              :imgurl="getCloudinaryImg('highcanfly-web', 250, 250).toURL()"
              :miniImgurl="
                getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()
              "
              :lightboxUrl="getCloudinaryImg('highcanfly-web').toURL()"
              author="@highcanfly"
              authorTitle="dev"
              :baseMessage="$t('services.design')"
              value="vue3"
            />
            <type-2-card
              title="cdvl 59"
              :imgurl="getCloudinaryImg('cdvl59-web', 250, 250).toURL()"
              :miniImgurl="
                getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()
              "
              :lightboxUrl="getCloudinaryImg('cdvl59-web').toURL()"
              author="@cdvl59"
              authorTitle="dev"
              :baseMessage="$t('services.design')"
              value="vue3"
            />
            <type-2-card
              title="vdo com"
              :imgurl="getCloudinaryImg('vdocom-web', 250, 250).toURL()"
              :miniImgurl="
                getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()
              "
              :lightboxUrl="getCloudinaryImg('vdocom-web').toURL()"
              author="@vdocom"
              authorTitle="dev"
              :baseMessage="$t('services.design_hosting')"
              value="php"
            />
            <type-2-card
              title="cfd marche et vol"
              :imgurl="getCloudinaryImg('cfdmv-web', 250, 250).toURL()"
              :miniImgurl="
                getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()
              "
              :lightboxUrl="getCloudinaryImg('cfdmv-web').toURL()"
              author="@ffvl"
              authorTitle="dev"
              :baseMessage="$t('services.web_app')"
              value="js"
            />
            <type-2-card
              title="tma lille 3.1"
              :imgurl="getCloudinaryImg('tmalille31-web', 250, 250).toURL()"
              :miniImgurl="
                getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()
              "
              :lightboxUrl="getCloudinaryImg('tmalille31-web').toURL()"
              author="@cdvl59"
              authorTitle="dev"
              baseMessage="laravel app"
              value="laravel"
            />
            <type-2-card
              title="lorany"
              :imgurl="getCloudinaryImg('lorany-dolly', 250, 250).toURL()"
              :miniImgurl="
                getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()
              "
              :lightboxUrl="getCloudinaryImg('lorany-dolly').toURL()"
              author="@lorany"
              authorTitle="dev"
              baseMessage="dolibarr-hosting"
              value="dolibarr"
            />
          </tiny-slider>
        </div>
      </div>
    </section>
    <section class="pt-5">
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
    <section id="features" class="pt-[90px]">
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
        <div class="mx-auto mb-10 max-w-[650px] text-center">
          <h2
            class="mb-4 text-4xl font-semibold leading-5 text-white sm:text-5xl"
          >
            Core Features
          </h2>
          <p class="text-lg font-medium text-zinc-400">
            {{$t('dev.lorem50')}}
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
    <footer-main />
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";
import MiniSlides from "@/components/cards/MiniSlides";
import TinySlider from "@/components/elements/TinySlider";
import Type2Card from "@/components/cards/Type2Card";
import WebDesignCard from "@/components/cards/WebDesignCard.vue";
import ServerAdministrationCard from "@/components/cards/ServerAdministrationCard.vue";
//import Type3Card from "./cards/Type3Card.vue";
import Type4Card from "./cards/Type4Card.vue";
import {
  getCloudinaryImg,
  getCloudinaryResponsiveBackground,
} from "@/utilities/utilities.js";
import { ref } from "vue";

const backgroundImage = "background-left";

export default {
  name: "App",
  reactiveBackground: ref(""),
  resizeId: 0,
  previousWindowSize: 0,
  created() {
    window.addEventListener("resize", this.handleResize);
    this.previousWindowSize = window.innerWidth;
    this.reactiveBackground = getCloudinaryResponsiveBackground(backgroundImage)
      .format("auto")
      .toURL();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    this.$route.query.lang !== undefined
      ? this.$route.query.lang == "fr" || this.$route.query.lang == "fr"
        ? (this.$i18n.locale = this.$route.query.lang)
        : ""
      : "";
    return { getCloudinaryImg, reactiveBackground: this.reactiveBackground };
  },
  components: {
    HeaderMain,
    MiniSlides,
    TinySlider,
    Type2Card,
 //   Type3Card,
    Type4Card,
    FooterMain,
    WebDesignCard,
    ServerAdministrationCard,
  },
  methods: {
    handleResize: function () {
      clearTimeout(this.resizeId);
      this.resizeId = setTimeout(() => {
        if (window.innerWidth > this.previousWindowSize) {
          this.previousWindowSize = window.innerWidth;
          let newUrl = getCloudinaryResponsiveBackground(backgroundImage)
            .format("auto")
            .toURL();
          if (newUrl != this.reactiveBackground) {
            this.reactiveBackground = newUrl;
          }
        }
      }, 500);
    },
  },
};
</script>
<style>
</style>