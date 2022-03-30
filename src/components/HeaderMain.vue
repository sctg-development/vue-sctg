<template>
  <header
    class="items-center w-full flex z-50 left-0 top-0 fixed"
    :class="
      scrolledFromTop ? 'shadow backdrop-blur-sm bg-gdt-700/70' : 'bg-transparent'
    "
  >
    <div
      class="
        w-full
        mx-auto
        px-[16px]
        sm:max-w-[575px]
        md:max-w-[768px]
        lg:max-w-[992px]
        xl:max-w-[1140px]
        2xl:max-w-[1320px]
      "
    >
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="max-w-full px-4">
          <a
            href="index.html"
            class="header-logo w-32 block"
            :class="scrolledFromTop ? 'py-4 lg:py-2' : 'py-5 lg:py-7'"
          >
            <img
              :src="require('@/assets/img/Logo_SCTG_long.svg')"
              alt="SCTG logo"
              class="h-12 max-w-full contrast-100 brightness-100"
            />
          </a>
        </div>
        <div class="flex w-full items-center justify-between mx-4">
          <div>
            <button
              @click="navbarOpen = !navbarOpen"
              :class="navbarOpen && 'navbarTogglerActive'"
              id="navbarToggler"
              name="navbarToggler"
              aria-label="navbarToggler"
              class="
                absolute
                px-6
                top-1/2
                block
                -translate-y-1/2
                rounded-lg
                text-base
                pfont-semibold
                text-[40px]
                focus:text-white
                lg:hidden
              "
            >
              <span
                :class="navbarOpen && 'aB aC top-2'"
                class="relative max-w-[1320px] block w-[30px] justify-between"
              ></span>
              <span
                :class="navbarOpen && 'w-60'"
                class="relative max-w-[1320px] block w-[30px] justify-between"
              ></span>
              <span
                :class="navbarOpen && 'aD[-8px] max-w-full'"
                class="relative max-w-[1320px] block w-[30px] justify-between"
              ></span>
            </button>
            <nav
              :class="!navbarOpen && 'hidden'"
              id="navbarCollapse"
              class="
                absolute
                right-4
                top-full
                w-full
                max-w-[250px]
                rounded
                bg-slate-700
                lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent
                xl:px-6
                none
              "
            >
              <ul class="lg:flex">
                <li class="relative">
                  <a
                    href="index.html"
                    class="
                      px-4
                      flex
                      py-2
                      text-xl
                      font-semibold
                      text-white
                      hover:text-slate-400
                      lg:mr-0 lg:font-bold lg:py-6 lg:a12
                    "
                  >
                    {{$t("nav.home")}}
                  </a>
                </li>
                <li class="relative">
                  <a
                    href="explore-items.html"
                    class="
                      px-4
                      flex
                      py-2
                      text-xl
                      font-semibold
                      text-slate-400
                      hover:text-white
                      lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:px-0
                      xl:ml-12
                    "
                  >
                    {{$t("nav.explore")}}
                  </a>
                </li>
                <li class="relative">
                  <a
                    href="https://discord.com/invite/SxNNgXBAQS"
                    target="_blank"
                    rel="nofollow"
                    class="
                      px-8
                      flex
                      py-2
                      text-xl
                      font-semibold
                      text-slate-400
                      hover:text-white
                      lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:px-0
                      xl:ml-12
                    "
                  >
                    {{$t("nav.community")}}
                  </a>
                </li>
                <li class="submenu-item relative">
                  <a
                    href="javascript:void(0)"
                    @click="submenuOpen = !submenuOpen"
                    class="
                      relative
                      px-4
                      flex
                      py-2
                      text-xl
                      font-semibold
                      text-slate-400
                      after:absolute
                      after:right-1
                      after:top-1/2
                      after:a16[-2px]
                      after:a17
                      after:a18
                      after:-translate-y-1/2
                      after:aC
                      after:a19
                      after:a1a
                      after:a1b
                      hover:text-white
                      lg:mr-0
                      lg:ml-8
                      lg:font-bold
                      lg:py-6
                      lg:a1c
                      lg:a1d
                      lg:after:a1e
                      xl:ml-12
                    "
                  >
                    {{$t("nav.pages")}} <i class="pl-1 py-1 fa-solid fa-angle-down"></i>
                  </a>
                  <div
                    :class="submenuOpen ? 'block' : 'hidden'"
                    class="
                      submenu
                      relative
                      top-full
                      left-0
                      w-[250px]
                      rounded-lg
                      bg-slate-800
                      p-4
                      px-8[top]
                      a1i
                      group-hover:a1j
                      lg:a1k
                      lg:absolute
                      lg:aD[110%]
                      lg:w-60
                      lg:shadow-md
                      lg:group-hover:text-center
                      lg:group-hover:mx-4
                    "
                  >
                    <a
                      href="explore-items.html"
                      class="
                        block
                        rounded
                        font-semibold
                        mx-4
                        text-sm
                        font-medium
                        text-slate-400
                        hover:text-white
                      "
                    >
                      Explore Items
                    </a>
                    <a
                      href="item-details.html"
                      class="
                        block
                        rounded
                        font-semibold
                        mx-4
                        text-sm
                        font-medium
                        text-slate-400
                        hover:text-white
                      "
                    >
                      Item Details
                    </a>
                    <a
                      href="create-item.html"
                      class="
                        block
                        rounded
                        font-semibold
                        mx-4
                        text-sm
                        font-medium
                        text-slate-400
                        hover:text-white
                      "
                    >
                      Create Item
                    </a>
                    <a
                      href="connect-wallet.html"
                      class="
                        block
                        rounded
                        font-semibold
                        mx-4
                        text-sm
                        font-medium
                        text-slate-400
                        hover:text-white
                      "
                    >
                      Connect Wallet
                    </a>
                    <a
                      href="support.html"
                      class="
                        block
                        rounded
                        font-semibold
                        mx-4
                        text-sm text-slate-400
                        hover:text-white
                      "
                    >
                      {{$t("nav.support")}}
                    </a>
                    <a
                      href="signin.html"
                      class="
                        block
                        rounded
                        font-semibold
                        mx-4
                        text-sm
                        font-medium
                        text-slate-400
                        hover:text-white
                      "
                    >
                      Sign In Page
                    </a>
                    <a
                      href="signup.html"
                      class="
                        block
                        rounded
                        font-semibold
                        mx-4
                        text-sm
                        font-medium
                        text-slate-400
                        hover:text-white
                      "
                    >
                      Sign Up Page
                    </a>
                  </div>
                </li>
                <li class="relative">
                  <a
                    href="support.html"
                    class="
                      px-4
                      flex
                      py-2
                      text-xl
                      font-semibold
                      text-slate-400
                      hover:text-white
                      lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:a12
                      xl:ml-12
                    "
                  >
                    {{$t("nav.support")}}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-1 sm:flex lg:pr-0">
            <div class="relative hidden md:flex">
              <button
                @click="searchOpen = !searchOpen"
                class="
                  py-7
                  px-7
                  text-base
                  font-semibold
                  text-zinc-400
                  transition-all
                  ease-in-out
                  duration-150
                  hover:text-indigo-600
                  lg:mx-4
                  xl:px-7
                "
                name="search"
                aria-label="search"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2917 3.25C12.1592 3.25 13.9503 3.99189 15.2709 5.31246C16.5914 6.63303 17.3333 8.4241 17.3333 10.2917C17.3333 12.0358 16.6942 13.6392 15.6433 14.8742L15.9358 15.1667H16.7917L22.2083 20.5833L20.5833 22.2083L15.1667 16.7917V15.9358L14.8742 15.6433C13.6392 16.6942 12.0358 17.3333 10.2917 17.3333C8.4241 17.3333 6.63303 16.5914 5.31246 15.2709C3.99189 13.9503 3.25 12.1592 3.25 10.2917C3.25 8.4241 3.99189 6.63303 5.31246 5.31246C6.63303 3.99189 8.4241 3.25 10.2917 3.25ZM10.2917 5.41667C7.58333 5.41667 5.41667 7.58333 5.41667 10.2917C5.41667 13 7.58333 15.1667 10.2917 15.1667C13 15.1667 15.1667 13 15.1667 10.2917C15.1667 7.58333 13 5.41667 10.2917 5.41667Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <div
                :class="searchOpen ? 'block' : 'hidden'"
                class="
                  absolute
                  top-[110%]
                  right-0
                  rounded-md
                  bg-slate-800
                  p-3
                  w-60
                  ease-in-out
                  duration-150
                "
              >
                <form class="flex">
                  <input
                    type="text"
                    placeholder="Search here..."
                    class="
                      w-full
                      bg-transparent
                      py-2
                      px-4
                      mr-1
                      text-white
                      rounded
                      outline-none
                    "
                  />
                  <button
                    class="text-white"
                    name="search-button"
                    aria-label="search-button"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2917 3.25C12.1592 3.25 13.9503 3.99189 15.2709 5.31246C16.5914 6.63303 17.3333 8.4241 17.3333 10.2917C17.3333 12.0358 16.6942 13.6392 15.6433 14.8742L15.9358 15.1667H16.7917L22.2083 20.5833L20.5833 22.2083L15.1667 16.7917V15.9358L14.8742 15.6433C13.6392 16.6942 12.0358 17.3333 10.2917 17.3333C8.4241 17.3333 6.63303 16.5914 5.31246 15.2709C3.99189 13.9503 3.25 12.1592 3.25 10.2917C3.25 8.4241 3.99189 6.63303 5.31246 5.31246C6.63303 3.99189 8.4241 3.25 10.2917 3.25ZM10.2917 5.41667C7.58333 5.41667 5.41667 7.58333 5.41667 10.2917C5.41667 13 7.58333 15.1667 10.2917 15.1667C13 15.1667 15.1667 13 15.1667 10.2917C15.1667 7.58333 13 5.41667 10.2917 5.41667Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <a
              href="connect-wallet.html"
              class="
                flex
                whitespace-nowrap
                items-center
                rounded-md
                border-2 border-white
                my-2
                py-3
                px-4
                text-base
                font-semibold
                text-white
                transition-all
                ease-in-out
                duration-300
                hover:border-indigo-600 hover:bg-indigo-600
                lg:px-4
              "
            >
              <span class="pr-2"><i class="fa-solid fa-lock"></i> </span>
              {{$t('message.connect')}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { ref } from "vue";

export default {
  scrolledFromTop: ref(''),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {   
      window.pageYOffset >= 50
        ? (this.scrolledFromTop = true)
        : (this.scrolledFromTop = false);
    },
  },
  data() {
    let submenuOpen = false;
    let navbarOpen = false;
    let searchOpen = false;
    return {
      navbarOpen: ref(navbarOpen),
      submenuOpen: ref(submenuOpen),
      scrolledFromTop: (this.scrolledFromTop),
      searchOpen: ref(searchOpen),
    };
  },
};
</script>