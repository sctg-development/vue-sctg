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
            :src="getCloudinaryImg('web-design', 300).toURL()"
            alt="Web design"
            class="rounded-xl w-full"
          />
        </div>
      </div>
      <div class="w-1/3 mx-3">
        <div class="mb-6 w-full bg-slate-300 rounded-lg">
          <img
            :src="getCloudinaryImg('responsive-web-design', 200).toURL()"
            alt="Responsive web design"
            class="w-full"
          />
        </div>
        <div class="mb-6 w-full bs-slate-100">
          <img
            :src="require('@/assets/img/html5-react-vue.svg')"
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
          {{ $t("message.web_design") }}
        </a>
      </h3>
      <button
        class="inline-flex font-bold items-center rounded-md bg-white px-2 py-1"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99999 11.8709L6.15416 11.1009C3.14999 8.37675 1.16666 6.57425 1.16666 4.37508C1.16666 2.57258 2.57832 1.16675 4.37499 1.16675C5.38999 1.16675 6.36416 1.63925 6.99999 2.38008C7.63582 1.63925 8.60999 1.16675 9.62499 1.16675C11.4217 1.16675 12.8333 2.57258 12.8333 4.37508C12.8333 6.57425 10.85 8.37675 7.84582 11.1009L6.99999 11.8709Z"
            fill="#F85486"
          ></path>
        </svg>
        <span class="pl-1 text-xs font-semibold text-zinc-900"> 1.6K </span>
      </button>
    </div>
    <div class="flex items-center">
      <div class="mr-3 h-[46px] w-full max-w-[46px] overflow-hidden rounded-md">
        <img
          src="https://nft-tailwind.preview.uideck.com/images/collections/creator-01.jpg"
          alt=""
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="w-full">
        <h4 class="text-base font-semibold text-white">
          @Lathium_Lui...
          <span class="block text-sm font-medium text-zinc-400"> Creator </span>
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getCloudinaryImg,
} from "@/utilities/utilities.js";
export default {
    setup() {
        return {getCloudinaryImg};
    },
}
</script>