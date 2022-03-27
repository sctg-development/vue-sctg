<template>
  <!-- source https://nft-tailwind.preview.uideck.com/ -->
  <div class="bg-slate-900">
    <header-main />
    <section
      :style="{
        backgroundImage:
          'url(https://nft-tailwind.preview.uideck.com/images/hero/common-bg.jpg)',
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
                  font-keepcalm tracking-wide
                  md:text-5xl
                  lg:text-6xl
                  sm:text-4xl
                "
              >
                {{$t("message.company")}}
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
              >
                
              </p>
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
                  {{$t("message.explore_now")}}
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
                  {{$t("message.upload_your_art")}}
                </a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <div class="text-center">
              <img
                :src="require('@/assets/img/Logo_SCTG_carre_3D.svg')"
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
    <section class="pt-5">
      <div class=" w-full
          mx-auto
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          2xl:max-w-screen-xl
          px-4">
        <div class="py-1 border-b border-white px-1.5 border-opacity-10">
          <div class="-mx-4 flex">
            <div class="w-full px-4">
              <h2 class="mb-5 text-3xl font-bold text-white">{{$t("message.references")}}</h2>
            </div>
          </div>
        </div>
        <div class="relative">
          <slides-card />
        </div>
      </div>
    </section>
    <section class="pt-12">
      <div class="w-full mx-auto px-4">
        <div class="py-1 border-t border-white px-1.5">
          <div class="justify-between sm:flex">
            <h2 class="mb-4 text-3xl font-medium leading-none text-white">
              Live Auctions
            </h2>
            <a
              href="javascript:void(0)"
              class="
                mb-5
                font-bold
                items-center
                justify-center
                rounded-md
                bg-indigo-600
                font-semibold
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
        <div class="-mx-4 flex px-7">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/auctions/image-01.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    4.6K
                  </span>
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
                    22-Bit Digital #551
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
                          @Devid_Mill...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      5.49 ETH
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
                    bg-white
                    opacity-10
                    p-[10px]
                    text-base
                    font-semibold
                    text-white
                  "
                >
                  05 : 15 : 07 : 45
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/auctions/image-02.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    1.6K
                  </span>
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
                    25-Bit Digital #729
                  </a>
                </h3>
                <div class="mb-5 flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/auctions/creator-02.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Devid_Meth...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      1.58 ETH
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
                    bg-white
                    opacity-10
                    p-[10px]
                    text-base
                    font-semibold
                    text-white
                  "
                >
                  06 : 15 : 07 : 55
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/auctions/image-03.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    500
                  </span>
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
                    27-Bit Digital #395
                  </a>
                </h3>
                <div class="mb-5 flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/auctions/creator-03.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Jemmy_Fra...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      3.25 ETH
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
                    bg-white
                    opacity-10
                    p-[10px]
                    text-base
                    font-semibold
                    text-white
                  "
                >
                  02 : 15 : 08 : 44
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/auctions/image-04.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    200
                  </span>
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
                    35-Bit Digital #439
                  </a>
                </h3>
                <div class="mb-5 flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/auctions/creator-04.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Miliya_Cho...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      1.57 ETH
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
                    bg-white
                    opacity-10
                    p-[10px]
                    text-base
                    font-semibold
                    text-white
                  "
                >
                  07 : 15 : 03 : 12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full pt-8">
      <div class="w-full mx-auto px-4">
        <div class="py-1 border-t border-white px-1.5">
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
                font-semibold
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
        <div class="w-1/2-mx-4 flex px-7 overflow-hidden">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/picks/image-01.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    4.6K
                  </span>
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
                    3d abstract illustration
                  </a>
                </h3>
                <div class="a2b flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/picks/creator-01.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Devid_Mill...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      5.49 ETH
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
                    justify-between
                    border-t-2 border-slate-600
                    pt-5
                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-indigo-600
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:opacity-90
                      sm:px-5
                    "
                  >
                    Place Bid
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      hover:mb-6
                      sm:px-5
                    "
                  >
                    <span class="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    View History
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/picks/image-02.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    1.6K
                  </span>
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
                    3d abstract illustration
                  </a>
                </h3>
                <div class="a2b flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/picks/creator-02.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Wilium_de...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      2.85 ETH
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
                    justify-between
                    border-t-2 border-slate-600
                    pt-5
                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-indigo-600
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:opacity-90
                      sm:px-5
                    "
                  >
                    Place Bid
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      hover:mb-6
                      sm:px-5
                    "
                  >
                    <span class="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    View History
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/picks/image-03.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    4.6K
                  </span>
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
                    3d abstract illustration
                  </a>
                </h3>
                <div class="a2b flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/picks/creator-03.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Nicolo_Tes...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      7.82 ETH
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
                    justify-between
                    border-t-2 border-slate-600
                    pt-5
                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-indigo-600
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:opacity-90
                      sm:px-5
                    "
                  >
                    Place Bid
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      hover:mb-6
                      sm:px-5
                    "
                  >
                    <span class="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    View History
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/picks/image-04.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    4.6K
                  </span>
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
                    3d abstract illustration
                  </a>
                </h3>
                <div class="a2b flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/picks/creator-04.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Liza_Auro...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      0.25 ETH
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
                    justify-between
                    border-t-2 border-slate-600
                    pt-5
                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-indigo-600
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:opacity-90
                      sm:px-5
                    "
                  >
                    Place Bid
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      hover:mb-6
                      sm:px-5
                    "
                  >
                    <span class="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    View History
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/picks/image-05.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    4.6K
                  </span>
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
                    3d abstract illustration
                  </a>
                </h3>
                <div class="a2b flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/picks/creator-05.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Lathium_Lui...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      3.24 ETH
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
                    justify-between
                    border-t-2 border-slate-600
                    pt-5
                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-indigo-600
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:opacity-90
                      sm:px-5
                    "
                  >
                    Place Bid
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      hover:mb-6
                      sm:px-5
                    "
                  >
                    <span class="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    View History
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/picks/image-06.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    4.6K
                  </span>
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
                    3d abstract illustration
                  </a>
                </h3>
                <div class="a2b flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/picks/creator-06.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Marko...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      4.55 ETH
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
                    justify-between
                    border-t-2 border-slate-600
                    pt-5
                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-indigo-600
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:opacity-90
                      sm:px-5
                    "
                  >
                    Place Bid
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      hover:mb-6
                      sm:px-5
                    "
                  >
                    <span class="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    View History
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/picks/image-07.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    4.6K
                  </span>
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
                    3d abstract illustration
                  </a>
                </h3>
                <div class="a2b flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/picks/creator-07.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Andrio_Hev...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      0.89 ETH
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
                    justify-between
                    border-t-2 border-slate-600
                    pt-5
                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-indigo-600
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:opacity-90
                      sm:px-5
                    "
                  >
                    Place Bid
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      hover:mb-6
                      sm:px-5
                    "
                  >
                    <span class="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    View History
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                p-[10px]
              "
            >
              <div class="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/picks/image-08.svg"
                  alt="auctions"
                  class="w-full"
                />
                <button
                  class="
                    absolute
                    px-6 px-5
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    4.6K
                  </span>
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
                    3d abstract illustration
                  </a>
                </h3>
                <div class="a2b flex items-center justify-between">
                  <div class="w-full">
                    <div class="flex items-center">
                      <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/picks/creator-08.png"
                          alt="creator"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="w-full">
                        <h4 class="text-xs font-semibold text-white">
                          @Mariya_Hie...
                          <span class="block text-xs font-medium text-zinc-400">
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <h5 class="text-right text-xs font-semibold text-white">
                      1.75 ETH
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
                    justify-between
                    border-t-2 border-slate-600
                    pt-5
                  "
                >
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-indigo-600
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      ease-in-out
                      duration-150
                      hover:opacity-90
                      sm:px-5
                    "
                  >
                    Place Bid
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="
                      flex
                      items-center
                      justify-center
                      rounded-md
                      py-7
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      hover:mb-6
                      sm:px-5
                    "
                  >
                    <span class="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    View History
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4">
            <div class="pt-8 text-center">
              <a
                href="javascript:void(0)"
                class="
                  font-bold
                  items-center
                  justify-center
                  rounded-md
                  border-2 border-white
                  py-7
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
    <section id="features" class="a1E[90px]">
      <div class="w-full mx-auto px-4">
        <div class="mx-auto a1K max-w-[650px] text-center">
          <h2
            class="mb-4 text-sm font-medium leading-5 text-white sm:text-[40px]"
          >
            Core Features
          </h2>
          <p class="text-lg font-medium text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
          </p>
        </div>
        <div class="-mx-4 flex px-7">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                a1X
                ease-in-out
                duration-150
                hover:border-white hover:bg-white
              "
            >
              <div
                class="
                  mb-5
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-b-full
                  bg-[#FFF0E9]
                "
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.75 25.5V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C5.51083 29.75 4.25 28.475 4.25 26.9167V7.08333C4.25 6.33189 4.54851 5.61122 5.07986 5.07986C5.61122 4.54851 6.33189 4.25 7.08333 4.25H26.9167C27.6681 4.25 28.3888 4.54851 28.9201 5.07986C29.4515 5.61122 29.75 6.33189 29.75 7.08333V8.5H17C15.4275 8.5 14.1667 9.775 14.1667 11.3333V22.6667C14.1667 23.4181 14.4652 24.1388 14.9965 24.6701C15.5279 25.2015 16.2486 25.5 17 25.5H29.75ZM17 22.6667H31.1667V11.3333H17V22.6667ZM22.6667 19.125C22.1031 19.125 21.5626 18.9011 21.1641 18.5026C20.7656 18.1041 20.5417 17.5636 20.5417 17C20.5417 16.4364 20.7656 15.8959 21.1641 15.4974C21.5626 15.0989 22.1031 14.875 22.6667 14.875C23.2303 14.875 23.7708 15.0989 24.1693 15.4974C24.5678 15.8959 24.7917 16.4364 24.7917 17C24.7917 17.5636 24.5678 18.1041 24.1693 18.5026C23.7708 18.9011 23.2303 19.125 22.6667 19.125Z"
                    fill="#FF766A"
                  ></path>
                </svg>
              </div>
              <h3
                class="
                  mb-2
                  text-xl
                  font-medium
                  text-white
                  transition-all
                  ease-in-out
                  duration-150
                  group-hover:text-zinc-900
                "
              >
                Set Up Your Wallet
              </h3>
              <p class="text-base font-medium text-zinc-400">
                Lorem ipsum dolor sit amet consectetur smit.
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                a1X
                ease-in-out
                duration-150
                hover:border-white hover:bg-white
              "
            >
              <div
                class="
                  mb-5
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-b-full
                  bg-[#FFF6DD]
                "
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 15.5833H15.5833V4.25H4.25V15.5833ZM4.25 29.75H15.5833V18.4167H4.25V29.75ZM18.4167 29.75H29.75V18.4167H18.4167V29.75ZM18.4167 4.25V15.5833H29.75V4.25"
                    fill="#F5B70A"
                  ></path>
                </svg>
              </div>
              <h3
                class="
                  mb-2
                  text-xl
                  font-medium
                  text-white
                  transition-all
                  ease-in-out
                  duration-150
                  group-hover:text-zinc-900
                "
              >
                Make Your Collection
              </h3>
              <p class="text-base font-medium text-zinc-400">
                Lorem ipsum dolor sit amet consectetur smit.
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                a1X
                ease-in-out
                duration-150
                hover:border-white hover:bg-white
              "
            >
              <div
                class="
                  mb-5
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-b-full
                  bg-[#EDF8F4]
                "
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0417 19.125L15.5833 23.375L20.5417 17L26.9167 25.5H7.08333L12.0417 19.125ZM29.75 26.9167V7.08333C29.75 5.51083 28.475 4.25 26.9167 4.25H7.08333C6.33189 4.25 5.61122 4.54851 5.07986 5.07986C4.54851 5.61122 4.25 6.33189 4.25 7.08333V26.9167C4.25 27.6681 4.54851 28.3888 5.07986 28.9201C5.61122 29.4515 6.33189 29.75 7.08333 29.75H26.9167C27.6681 29.75 28.3888 29.4515 28.9201 28.9201C29.4515 28.3888 29.75 27.6681 29.75 26.9167Z"
                    fill="#06DE90"
                  ></path>
                </svg>
              </div>
              <h3
                class="
                  mb-2
                  text-xl
                  font-medium
                  text-white
                  transition-all
                  ease-in-out
                  duration-150
                  group-hover:text-zinc-900
                "
              >
                Add Your NFTs
              </h3>
              <p class="text-base font-medium text-zinc-400">
                Lorem ipsum dolor sit amet consectetur smit.
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                a1X
                ease-in-out
                duration-150
                hover:border-white hover:bg-white
              "
            >
              <div
                class="
                  mb-5
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-b-full
                  bg-[#E1DDFF]
                "
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.79168 9.91671C7.22809 9.91671 6.68759 9.69282 6.28907 9.29431C5.89056 8.89579 5.66668 8.35529 5.66668 7.79171C5.66668 7.22812 5.89056 6.68762 6.28907 6.28911C6.68759 5.89059 7.22809 5.66671 7.79168 5.66671C8.35526 5.66671 8.89576 5.89059 9.29428 6.28911C9.69279 6.68762 9.91668 7.22812 9.91668 7.79171C9.91668 8.35529 9.69279 8.89579 9.29428 9.29431C8.89576 9.69282 8.35526 9.91671 7.79168 9.91671ZM30.3308 16.405L17.5808 3.65504C17.0708 3.14504 16.3625 2.83337 15.5833 2.83337H5.66668C4.09418 2.83337 2.83334 4.09421 2.83334 5.66671V15.5834C2.83334 16.3625 3.14501 17.0709 3.66918 17.5809L16.405 30.3309C16.9292 30.8409 17.6375 31.1667 18.4167 31.1667C19.1958 31.1667 19.9042 30.8409 20.4142 30.3309L30.3308 20.4142C30.855 19.9042 31.1667 19.1959 31.1667 18.4167C31.1667 17.6234 30.8408 16.915 30.3308 16.405Z"
                    fill="#5142FC"
                  ></path>
                </svg>
              </div>
              <h3
                class="
                  mb-2
                  text-xl
                  font-medium
                  text-white
                  transition-all
                  ease-in-out
                  duration-150
                  group-hover:text-zinc-900
                "
              >
                List Them For Sale
              </h3>
              <p class="text-base font-medium text-zinc-400">
                Lorem ipsum dolor sit amet consectetur smit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-8 a1I[60px]">
      <div class="w-full mx-auto px-4">
        <div class="py-1 border-t border-white px-1.5">
          <div class="justify-between sm:flex">
            <h2 class="mb-4 text-3xl font-medium leading-none text-white">
              Popular Collection
            </h2>
            <a
              href="javascript:void(0)"
              class="
                mb-5
                font-bold
                items-center
                justify-center
                rounded-md
                bg-indigo-600
                font-semibold
                px-6
                text-base
                font-semibold
                text-white
                ease-in-out
                duration-150
                hover:opacity-90
              "
            >
              Explore More
            </a>
          </div>
        </div>
        <div class="-mx-4 flex px-7">
          <div class="w-full px-4 lg:w-1/2">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                a3t
                md:a1X
                lg:a3t
                xl:a1X
              "
            >
              <div class="a2I flex px-7">
                <div class="a18/3 text-base">
                  <div class="a2b w-full">
                    <img
                      src="https://nft-tailwind.preview.uideck.com/images/collections/image-01.svg"
                      alt="collection"
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="w-1/3 text-base">
                  <div class="a2b w-full">
                    <img
                      src="https://nft-tailwind.preview.uideck.com/images/collections/image-02.svg"
                      alt="collection"
                      class="w-full"
                    />
                  </div>
                  <div class="a2b w-full">
                    <img
                      src="https://nft-tailwind.preview.uideck.com/images/collections/image-03.svg"
                      alt="collection"
                      class="w-full"
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
                    Creative 3d illustration
                  </a>
                </h3>
                <button
                  class="font-bold items-center rounded-md bg-white px-2 py-1"
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    1.6K
                  </span>
                </button>
              </div>
              <div class="flex items-center">
                <div
                  class="
                    a3u
                    h-[46px]
                    w-full
                    max-w-[46px]
                    overflow-hidden
                    rounded-md
                  "
                >
                  <img
                    src="https://nft-tailwind.preview.uideck.com/images/collections/creator-01.jpg"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <div class="w-full">
                  <h4 class="text-base font-semibold text-white">
                    @Lathium_Lui...
                    <span class="block text-sm font-medium text-zinc-400">
                      Creator
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <div
              class="
                mb-10
                rounded
                border border-slate-600
                bg-slate-700
                a3t
                md:a1X
                lg:a3t
                xl:a1X
              "
            >
              <div class="a2I flex px-7">
                <div class="w-1/3 text-base">
                  <div class="a2b w-full">
                    <img
                      src="https://nft-tailwind.preview.uideck.com/images/collections/image-04.svg"
                      alt="collection"
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="a18/3 text-base">
                  <div class="a2I flex px-7">
                    <div class="w-1/2 text-base">
                      <div class="a2b w-full">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/collections/image-05.svg"
                          alt="collection"
                          class="w-full"
                        />
                      </div>
                    </div>
                    <div class="w-1/2 text-base">
                      <div class="a2b w-full">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/collections/image-06.svg"
                          alt="collection"
                          class="w-full"
                        />
                      </div>
                    </div>
                    <div class="w-full text-base">
                      <div class="a2b w-full">
                        <img
                          src="https://nft-tailwind.preview.uideck.com/images/collections/image-07.svg"
                          alt="collection"
                          class="w-full"
                        />
                      </div>
                    </div>
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
                    Modern illustration
                  </a>
                </h3>
                <button
                  class="font-bold items-center rounded-md bg-white px-2 py-1"
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
                  <span class="pl-1 text-xs font-semibold text-zinc-900">
                    3.6K
                  </span>
                </button>
              </div>
              <div class="flex items-center">
                <div
                  class="
                    a3u
                    h-[46px]
                    w-full
                    max-w-[46px]
                    overflow-hidden
                    rounded-md
                  "
                >
                  <img
                    src="https://nft-tailwind.preview.uideck.com/images/collections/creator-02.jpg"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <div class="w-full">
                  <h4 class="text-base font-semibold text-white">
                    @Andrio_Hev...
                    <span class="block text-sm font-medium text-zinc-400">
                      Creator
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-slate-700 pt-6">
      <div class="w-full mx-auto px-4">
        <div class="-mx-4 flex px-7">
          <div class="w-full px-4 sm:a25/12 lg:a26/12 xl:a27/12">
            <div class="a28">
              <div class="max-w-[300px]">
                <a href="index.html" class="a29 inline-block">
                  <img
                    src="https://nft-tailwind.preview.uideck.com/images/logo.svg"
                    alt="logo"
                    class="aq"
                  />
                </a>
                <p class="a2b text-base font-medium text-zinc-400">
                  Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod
                  tempor incididunt ut labore et dolore.
                </p>
                <div class="flex items-center">
                  <a
                    href="javascript:void(0)"
                    name="social-link"
                    aria-label="social-link"
                    class="mr-5 text-white hover:text-slate-600"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" class="a2d">
                      <path
                        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    name="social-link"
                    aria-label="social-link"
                    class="mr-5 text-white hover:text-slate-600"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" class="a2d">
                      <path
                        d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.27998 9.09 5.10998 7.38 2.99998 4.79C2.62998 5.42 2.41998 6.16 2.41998 6.94C2.41998 8.43 3.16998 9.75 4.32998 10.5C3.61998 10.5 2.95998 10.3 2.37998 10C2.37998 10 2.37998 10 2.37998 10.03C2.37998 12.11 3.85998 13.85 5.81998 14.24C5.45998 14.34 5.07998 14.39 4.68998 14.39C4.41998 14.39 4.14998 14.36 3.88998 14.31C4.42998 16 5.99998 17.26 7.88998 17.29C6.42998 18.45 4.57998 19.13 2.55998 19.13C2.21998 19.13 1.87998 19.11 1.53998 19.07C3.43998 20.29 5.69998 21 8.11998 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    name="social-link"
                    aria-label="social-link"
                    class="mr-5 text-white hover:text-slate-600"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" class="a2d">
                      <path
                        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    name="social-link"
                    aria-label="social-link"
                    class="mr-5 text-white hover:text-slate-600"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" class="a2d">
                      <path
                        d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 sm:a25/12 lg:a26/12 xl:a26/12">
            <div class="a28">
              <h2 class="a2e text-2xl font-medium text-white">Company</h2>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      mb-4
                      inline-block
                      text-base
                      font-medium
                      text-zinc-400
                      transition-all
                      ease-in-out
                      duration-150
                      hover:text-white
                    "
                  >
                    About company
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      mb-4
                      inline-block
                      text-base
                      font-medium
                      text-zinc-400
                      transition-all
                      ease-in-out
                      duration-150
                      hover:text-white
                    "
                  >
                    Company services
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      mb-4
                      inline-block
                      text-base
                      font-medium
                      text-zinc-400
                      transition-all
                      ease-in-out
                      duration-150
                      hover:text-white
                    "
                  >
                    Job opportunities
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      mb-4
                      inline-block
                      text-base
                      font-medium
                      text-zinc-400
                      transition-all
                      ease-in-out
                      duration-150
                      hover:text-white
                    "
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:a25/12 lg:a26/12 xl:a18/12">
            <div class="a28">
              <h2 class="a2e text-2xl font-medium text-white">Customer</h2>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      mb-4
                      inline-block
                      text-base
                      font-medium
                      text-zinc-400
                      transition-all
                      ease-in-out
                      duration-150
                      hover:text-white
                    "
                  >
                    Client support
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      mb-4
                      inline-block
                      text-base
                      font-medium
                      text-zinc-400
                      transition-all
                      ease-in-out
                      duration-150
                      hover:text-white
                    "
                  >
                    Latest news
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      mb-4
                      inline-block
                      text-base
                      font-medium
                      text-zinc-400
                      transition-all
                      ease-in-out
                      duration-150
                      hover:text-white
                    "
                  >
                    Company Details
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      mb-4
                      inline-block
                      text-base
                      font-medium
                      text-zinc-400
                      transition-all
                      ease-in-out
                      duration-150
                      hover:text-white
                    "
                  >
                    Who we are
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:a25/12 lg:a26/12 xl:a26/12">
            <div class="a28">
              <h2 class="a2e text-2xl font-medium text-white">Subscribe Now</h2>
              <p class="mb-5 text-base font-medium text-zinc-400">
                Enter your email address for receiving valuable newsletters.
              </p>
              <form class="relative">
                <input
                  type="email"
                  name="newslettersEmail"
                  placeholder="Enter your email address"
                  class="
                    a2g
                    w-full
                    rounded-lg
                    border border-slate-600
                    bg-transparent
                    pl-5
                    pr-10
                    text-sm
                    font-medium
                    text-white
                    outline-none
                    focus:border-indigo-600
                  "
                />
                <button
                  type="submit"
                  name="submit"
                  aria-label="submit"
                  class="
                    absolute
                    a2j[6px]
                    top-1/2
                    flex
                    a2k
                    a2l
                    a2m/2
                    items-center
                    justify-center
                    rounded-md
                    bg-indigo-600
                    text-white
                  "
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" class="a2d">
                    <path
                      d="M1.66669 17.5L19.1667 10L1.66669 2.5V8.33333L14.1667 10L1.66669 11.6667V17.5Z"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="a2n border-slate-600">
          <div class="py-7 text-center">
            <p class="text-base font-medium text-zinc-400">
              © Copyright SCTG Development - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain"
import SlidesCard from "@/components/SlidesCard"

export default {
  name: "App",
  data() {
    this.$route.query.lang !== undefined ?  (this.$route.query.lang == 'fr' || this.$route.query.lang == 'fr' ? this.$i18n.locale = this.$route.query.lang : '' ) : '' ;
    return {}
  },
  components: {
    SlidesCard,
    HeaderMain
  },
  methods: {},
};
</script>
<style>


</style>