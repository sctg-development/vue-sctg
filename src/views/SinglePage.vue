<template>
  <div id="top" class="bg-slate-900 min-h-screen relative">
    <header-main />
    <main-section>
      <section id="content">
        <div
          class="
            flex
            items-center
            sm:min-h-screen-1/3
            w-full
            mx-auto
            sm:max-w-screen-sm
            md:max-w-screen-md
            lg:max-w-screen-lg
            xl:max-w-screen-xl
            2xl:max-w-screen-xl
          "
        >
          <div class="px-4">
            <div class="relative z-10 overflow-hidden rounded-lg bg-slate-700">
              <div class="-mx-4 flex flex-wrap">
                <div
                  class="w-full px-4 lg:pr-8 lg:w-5/12 xl:w-1/3 items-center"
                >
                  <div
                    class="
                      relative
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
                        toto
                      </div>
                    </div>
                    <div>
                      <span class="absolute left-3 bottom-6 -z-10">
                        <img :src="require('@/assets/img/dots.svg')" />
                      </span>
                      <span class="absolute right-0 bottom-1/2 -z-10">
                        <img :src="require('@/assets/img/circle.svg')" />
                      </span>
                      <span class="absolute left-1/4 bottom-1/2 -z-10">
                        <img :src="require('@/assets/img/triangle.svg')" />
                      </span>
                      <span class="absolute left-0 bottom-1/4 -z-10">
                        <img :src="require('@/assets/img/broken.svg')" />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full px-8 lg:w-5/12 xl:w-2/3">
                  <div class="text-white">
                    <h1>Lorem</h1>
                    <p>{{ $t("dev.lorem50") }}</p>
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
<script>
import HeaderMain from "@/components/HeaderMain.vue";
import MainSection from "@/components/elements/MainSection.vue";
import FooterMain from "@/components/FooterMain.vue";

import { getCloudinaryImg } from "@/utilities/utilities.js";

export default {
  setup() {},
  name: "SinglePage",

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
    FooterMain,
  },
};
</script>