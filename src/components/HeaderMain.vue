<template>
        <header
      class="bg-transparent items-center w-full flex z-50 left-0 top-0 fixed"
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
              class="header-logo w-32 block py-5 lg:py-7"
              :class="scrolledFromTop ? 'py-4 lg:py-2' : 'py-5 lg:py-7'"
            >
              <img
                :src="require('@/assets/img/Logo_SCTG_long.svg')"
                alt="SCTG logo"
                class="h-20 max-w-full contrast-100 brightness-100"
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
                  py-3 
                  lg:py-4
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
                        group-hover:text-white
                        lg:mr-0 lg:font-bold lg:py-6 lg:a12
                      "
                    >
                      Home
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
                        group-hover:text-white
                        lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:px-0
                        xl:ml-12
                      "
                    >
                      Explore
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
                        group-hover:text-white
                        lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:px-0
                        xl:ml-12
                      "
                    >
                      Community
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
                        group-hover:text-white
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
                      Pages <i class="pl-1 py-1 fa-solid fa-angle-down"></i>
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
                          text-sm
                          text-slate-400
                          hover:text-white
                        "
                      >
                        Support
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
                        group-hover:text-white
                        lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:a12
                        xl:ml-12
                      "
                    >
                      Support
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
                <span class="pr-2">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.125 17.75V18.7083C20.125 19.2167 19.9231 19.7042 19.5636 20.0636C19.2042 20.4231 18.7167 20.625 18.2083 20.625H4.79167C3.72792 20.625 2.875 19.7625 2.875 18.7083V5.29167C2.875 4.78333 3.07693 4.29582 3.43638 3.93638C3.79582 3.57693 4.28334 3.375 4.79167 3.375H18.2083C18.7167 3.375 19.2042 3.57693 19.5636 3.93638C19.9231 4.29582 20.125 4.78333 20.125 5.29167V6.25H11.5C10.4363 6.25 9.58333 7.1125 9.58333 8.16667V15.8333C9.58333 16.3417 9.78527 16.8292 10.1447 17.1886C10.5042 17.5481 10.9917 17.75 11.5 17.75H20.125ZM11.5 15.8333H21.0833V8.16667H11.5V15.8333ZM15.3333 13.4375C14.9521 13.4375 14.5865 13.286 14.3169 13.0165C14.0473 12.7469 13.8958 12.3812 13.8958 12C13.8958 11.6188 14.0473 11.2531 14.3169 10.9835C14.5865 10.714 14.9521 10.5625 15.3333 10.5625C15.7146 10.5625 16.0802 10.714 16.3498 10.9835C16.6194 11.2531 16.7708 11.6188 16.7708 12C16.7708 12.3812 16.6194 12.7469 16.3498 13.0165C16.0802 13.286 15.7146 13.4375 15.3333 13.4375Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                Partner Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>