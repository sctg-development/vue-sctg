<template>
  <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
    <div class="mb-10 rounded-xl border border-slate-600 bg-slate-700 p-[10px]">
      <div class="relative mb-5 overflow-hidden rounded-lg">
        <img
          src="https://nft-tailwind.preview.uideck.com/images/auctions/image-01.svg"
          alt="auctions"
          class="w-full"
        />
        <button
          class="
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
          "
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
          <span class="pl-1 text-xs font-semibold text-zinc-900"> 4.6K </span>
        </button>
      </div>
      <div>
        <h3>
          <a
            href="javascript:void(0)"
            class="
              mb-3
              inline-block
              text-lg
              font-semibold
              text-white
              hover:text-slate-600
            "
          >
            {{ title }}
          </a>
        </h3>
        <div class="mb-5 flex items-center justify-between">
          <div class="w-full">
            <div class="flex items-center">
              <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/auctions/creator-01.png"
                  alt="creator"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div class="w-full">
                <h4 class="text-xs font-semibold text-white">
                  {{ author }}
                  <span class="block text-xs font-medium text-zinc-400">
                    creator
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full">
            <h5 class="text-right text-xs font-semibold text-white">
              {{ price }}
              <span class="block text-xs font-medium text-zinc-400">
                Current Bit
              </span>
            </h5>
          </div>
        </div>
        <div
          class="
            flex
            items-center
            justify-center
            rounded-md
            bg-slate-600 
            p-[10px]
            text-base
            font-semibold
            text-white
          "
        >
          {{ time }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    imgurl: String,
    author: String,
    price: String,
    time: String,
  },
  setup() {},
};
</script>