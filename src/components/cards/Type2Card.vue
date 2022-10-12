<template>
  <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
    <div class="mb-10 rounded-xl border border-slate-600 bg-slate-700 p-[10px]">
      <div class="relative mb-5 overflow-hidden rounded-lg">
        <img :src="imgurl" alt="auctions" class="w-full hover:cursor-pointer" @click="lightBox(lightboxUrl)" />
        <!-- <css-lightbox :src="imgurl" class="w-full hover:cursor-pointer" :full-screen-src="lightboxUrl"/> -->
        <button class="
            absolute
            right-4
            top-4
            inline-flex
            font-bold
            items-center
            rounded-md
            bg-white
            px-2
            py-1
          ">
          <img class="w-[14px] h-[14px]" :src="$require('assets/img/techno.svg')" />
          <span class="pl-1 text-xs font-semibold text-zinc-900">
            {{ value }}
          </span>
        </button>
      </div>
      <div>
        <h3>
          <a @click="lightBox($props.lightboxUrl)" class="
              mb-3
              inline-block
              text-lg
              font-semibold
              text-white
              hover:text-slate-600
              capitalize
              hover:cursor-pointer
            ">
            {{ title }}
          </a>
        </h3>
        <div class="mb-5 flex items-center justify-between">
          <div class="w-full">
            <div class="flex items-center">
              <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                <img :src="miniImgurl" alt="creator" class="h-full w-full object-cover object-center" />
              </div>
              <div class="w-full">
                <h4 class="text-xs font-semibold text-white">
                  {{ author }}
                  <span class="block text-xs font-medium text-zinc-400">
                    Team
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full">
            <h5 class="text-right text-xs font-semibold text-white">
              {{ authorTitle }}
              <span class="block text-xs font-medium text-zinc-400"> … </span>
            </h5>
          </div>
        </div>
        <div @click="lightBox($props.lightboxUrl)" class="
            flex
            items-center
            justify-center
            rounded-md
            bg-slate-600
            p-10px
            text-base
            font-semibold
            text-white
            hover:bg-indigo-600 hover:cursor-pointer
          ">
          {{ baseMessage }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as basiclightbox from "basiclightbox";
import { getCurrentInstance } from "vue";
import CssLightbox from "@/utilities/CssLightbox.vue";
const props = defineProps<{
  title: string,
  imgurl: string,
  miniImgurl: string,
  lightboxUrl: string,
  author: string,
  authorTitle: string,
  baseMessage: string,
  value: string,
}>()

const $lightbox = getCurrentInstance().appContext.app.config.globalProperties.$lightbox

const lightBox = (url: string) => {
  if (url !== undefined) {
    basiclightbox
      .create(`<img src="${url}" />`)
      .show(() => console.log(`lightbox ${url} now visible`));
  }
}

</script>