<template>
  <header class="items-center w-full flex z-50 left-0 top-0 fixed" :class="
    scrolledFromTop
      ? 'shadow backdrop-blur-sm bg-gdt-700/70'
      : 'bg-transparent'
  ">
    <div class="
        w-full
        mx-auto
        px-16px
        sm:max-w-575px
        md:max-w-768px
        lg:max-w-992px
        xl:max-w-1140px
        2xl:max-w-1320px
      ">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="max-w-full px-4">
          <router-link :to="{ path: '/', hash: '#top', query: { lang: $i18n.locale } }" class="header-logo w-32 block"
            :class="scrolledFromTop ? 'py-4 lg:py-2' : 'py-5 lg:py-7'">
            <img :src="$require('@/assets/img/Logo_SCTG_long.svg')" alt="SCTG logo"
              class="h-12 max-w-full contrast-100 brightness-100" />
          </router-link>
        </div>
        <div class="flex w-full items-center justify-between mx-4">
          <div>
            <button class="
                self-start
                cursor-pointer
                text-white text-4xl
                leading-none
                px-3
                py-1
                border border-solid border-transparent
                rounded
                bg-transparent
                block
                lg:hidden
                outline-none
                focus:outline-none
                absolute
                top-2
                right-2
              " type="button" @click="navbarOpen = !navbarOpen">
              <i class="fas fa-bars"></i>
            </button>
            <nav :class="navbarOpen ? 'block' : 'hidden'" id="navbarCollapse" class="
                absolute
                right-4
                top-full
                w-full
                max-w-250px
                rounded
                bg-slate-700
                lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent
                xl:px-6
                none
              ">
              <ul class="lg:flex">
                <li class="relative">
                  <router-link :to="{
                    path: '/',
                    hash: '#top',
                    query: { lang: $i18n.locale },
                  }" class="
                      px-4
                      flex
                      py-2
                      text-xl
                      font-semibold
                      text-white
                      hover:text-slate-400
                      lg:mr-0 lg:font-bold lg:py-6 lg:px-0
                    ">
                    {{ $t("nav.home") }}
                  </router-link>
                </li>
                <li class="relative">
                  <router-link :to="{
                    path: '/',
                    hash: '#services',
                    query: { lang: $i18n.locale },
                  }" class="
                      px-4
                      flex
                      py-2
                      text-xl
                      font-semibold
                      text-slate-400
                      hover:text-white
                      lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:px-0
                      xl:ml-12
                    ">
                    {{ $t("nav.services") }}
                  </router-link>
                </li>
                <li class="relative">
                  <router-link :to="{
                    path: '/web',
                    hash: '#top',
                    query: { lang: $i18n.locale },
                  }" class="
                      px-8
                      flex
                      py-2
                      text-xl
                      font-semibold
                      text-slate-400
                      hover:text-white
                      lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:px-0
                      xl:ml-12
                    ">
                    {{ $t("nav.web") }}
                  </router-link>
                </li>
                <li class="flex items-center">
                  <div class="relative inline-block text-left">
                    <div>
                      <button @click="supportOpen = !supportOpen" type="button" class="
                          inline-flex
                          w-full
                          rounded-md
                          border-none
                          px-4
                          py-2
                          bg-transparent
                          text-xl
                          font-semibold
                          text-slate-400
                          hover:text-white
                          focus:outline-none
                          lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:px-0
                          xl:ml-12
                        " id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {{ $t("nav.support") }}
                        <svg class="-mr-1 ml-2 h-5 w-5 self-center" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div v-if="supportOpen && $auth0.user.value !== undefined" class="
                        submenu
                        relative
                        top-full
                        left-0
                        w-250px
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
                      ">
                      <router-link to="/add-shortlink" class="
                          block
                          rounded
                          mx-4
                          text-sm
                          font-medium
                          text-slate-400
                          hover:text-white
                        ">
                        {{ $t("nav.add_shortlinks") }}
                      </router-link>
                      <router-link to="/list-shorlinks" class="
                          block
                          rounded
                          mx-4
                          text-sm
                          font-medium
                          text-slate-400
                          hover:text-white
                        ">
                        {{ $t("nav.list_shortlinks") }}
                      </router-link>
                    </div>
                  </div>
                </li>
                <li class="flex items-center">
                  <div class="relative inline-block text-left">
                    <div>
                      <button @click="langOpen = !langOpen" type="button" class="
                          inline-flex
                          w-full
                          rounded-md
                          border-none
                          px-4
                          py-2
                          bg-transparent
                          text-xl
                          font-semibold
                          text-slate-400
                          hover:text-white
                          focus:outline-none
                          lg:mr-0 lg:ml-8 lg:font-bold lg:py-6 lg:px-0
                          xl:ml-12
                        " id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {{ $t("nav.lang") }}
                        <svg class="-mr-1 ml-2 h-5 w-5 self-center" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div v-if="langOpen" class="
                        origin-top-right
                        absolute
                        right-0
                        -mt-4
                        w-18
                        focus:outline-none
                        block
                      " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div class="py-1" role="none">
                        <span v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                          <img @click="changeLang(locale)" class="cursor-pointer w-12 h-12"
                            :src="$require(`@/assets/img/lang/${locale}.svg`)" />
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-1 sm:flex lg:pr-0">
            <div class="relative hidden md:flex">
              <button @click="searchOpen = !searchOpen" class="
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
                " name="search" aria-label="search">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.2917 3.25C12.1592 3.25 13.9503 3.99189 15.2709 5.31246C16.5914 6.63303 17.3333 8.4241 17.3333 10.2917C17.3333 12.0358 16.6942 13.6392 15.6433 14.8742L15.9358 15.1667H16.7917L22.2083 20.5833L20.5833 22.2083L15.1667 16.7917V15.9358L14.8742 15.6433C13.6392 16.6942 12.0358 17.3333 10.2917 17.3333C8.4241 17.3333 6.63303 16.5914 5.31246 15.2709C3.99189 13.9503 3.25 12.1592 3.25 10.2917C3.25 8.4241 3.99189 6.63303 5.31246 5.31246C6.63303 3.99189 8.4241 3.25 10.2917 3.25ZM10.2917 5.41667C7.58333 5.41667 5.41667 7.58333 5.41667 10.2917C5.41667 13 7.58333 15.1667 10.2917 15.1667C13 15.1667 15.1667 13 15.1667 10.2917C15.1667 7.58333 13 5.41667 10.2917 5.41667Z"
                    fill="currentColor"></path>
                </svg>
              </button>
              <div :class="searchOpen ? 'block' : 'hidden'" class="
                  absolute
                  top-110%
                  right-0
                  rounded-md
                  bg-slate-800
                  p-3
                  w-60
                  ease-in-out
                  duration-150
                ">
                <form class="flex">
                  <input type="text" placeholder="Search here..." class="
                      w-full
                      bg-transparent
                      py-2
                      px-4
                      mr-1
                      text-white
                      rounded
                      outline-none
                    " />
                  <button class="text-white" name="search-button" aria-label="search-button">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.2917 3.25C12.1592 3.25 13.9503 3.99189 15.2709 5.31246C16.5914 6.63303 17.3333 8.4241 17.3333 10.2917C17.3333 12.0358 16.6942 13.6392 15.6433 14.8742L15.9358 15.1667H16.7917L22.2083 20.5833L20.5833 22.2083L15.1667 16.7917V15.9358L14.8742 15.6433C13.6392 16.6942 12.0358 17.3333 10.2917 17.3333C8.4241 17.3333 6.63303 16.5914 5.31246 15.2709C3.99189 13.9503 3.25 12.1592 3.25 10.2917C3.25 8.4241 3.99189 6.63303 5.31246 5.31246C6.63303 3.99189 8.4241 3.25 10.2917 3.25ZM10.2917 5.41667C7.58333 5.41667 5.41667 7.58333 5.41667 10.2917C5.41667 13 7.58333 15.1667 10.2917 15.1667C13 15.1667 15.1667 13 15.1667 10.2917C15.1667 7.58333 13 5.41667 10.2917 5.41667Z"
                        fill="currentColor"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <button @click="loginout()" class="
                hidden
                lg:flex
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
              ">
              <span class="pr-2"><i class="fa-solid fa-lock"></i> </span>
              {{
              $auth0.user.value !== undefined
              ? `${$t("message.logout")} ${$auth0.user.value.name}`
              : $t("message.connect")
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import type { Auth0Instance } from "@/auth0/instance";
import { onMounted, onUnmounted, ref, getCurrentInstance } from "vue";
import { useI18n } from 'vue-i18n';
import { useLocaleStore } from '@/utilities/LocaleHelper'
import { useRoute, useRouter } from 'vue-router';
import { $require } from '@/utilities/viteHelper.js';
const $auth0 = getCurrentInstance().appContext.app.config.globalProperties.$auth0 as Auth0Instance
const { locale, availableLocales, messages, fallbackLocale } = useI18n({})
const localeCounter = useLocaleStore()
const scrolledFromTop = ref("")
const route = useRoute()
const router = useRouter()
const langOpen = ref(false);
const supportOpen = ref(false);
const submenuOpen = ref(false);
const navbarOpen = ref(false);
const searchOpen = ref(false);

function handleScroll() {
  window.pageYOffset >= 50
    ? (this.scrolledFromTop = true)
    : (this.scrolledFromTop = false);
}
const changeLang = (wantedLocale: string) => {
  console.log(`Locale change #${localeCounter.count}`)

  if ((locale.value != wantedLocale) && availableLocales.includes(wantedLocale)) {
    localeCounter.count++
    document.querySelector('html').setAttribute('lang', wantedLocale)
    router.replace({ query: { lang: wantedLocale } })
    console.log(`Change locale from ${locale.value} to ${wantedLocale}`);
    if (messages.value[wantedLocale].length == 0) {
      import(`@/locales/${wantedLocale}.json`).then((loadedMessages) => {
        messages.value[wantedLocale] = loadedMessages;
        console.log(`Lazily loaded ${wantedLocale} messages`);
        locale.value = wantedLocale;
      });
    } else {
      locale.value = wantedLocale;
    }
  }
}

function loginout() {
  if ($auth0.user.value !== undefined) {
    logout();
  } else {
    login();
  }
}
function login() {
  $auth0.loginWithRedirect();
}
// Log the user out
function logout() {
  $auth0.logout({
    returnTo: window.location.origin,
  });
}

onMounted(() => { window.addEventListener("scroll", handleScroll); })
onUnmounted(() => { window.removeEventListener("scroll", handleScroll); })

</script>