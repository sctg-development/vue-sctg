<template>
  <section
    id="main"
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
    >
    </div>
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
    ></div>
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
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
        <slot/>
  </section>
  <div v-if="($auth0.user.value !== undefined) && !$auth0.user.value.email_verified">
  <banner-alert />
  </div>
</template>
<script>
import { ref } from "vue";
import { getCloudinaryResponsiveBackground } from "@/utilities/utilities.js";
import BannerAlert from "@/components/cards/BannerAlert.vue";
const backgroundImage = "background-left";

export default {
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
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return { reactiveBackground: this.reactiveBackground, };
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
  components:{
    BannerAlert,
  }
};
</script>