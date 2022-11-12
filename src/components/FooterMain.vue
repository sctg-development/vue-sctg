<template>
  <footer class="bg-slate-800 pt-24 inline-block w-full mt-8 bottom-0 right-0">
    <div class="
        w-full
        mx-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        2xl:max-w-screen-xl
        px-4
      ">
      <div class="-mx-4 flex flex-wrap px-7">
        <div class="w-full px-4 sm:w-1/4 lg:w-1/4 xl:w-1/3">
          <div class="mb-16">
            <div class="max-w-300px">
              <router-link :to="{ path: '/', hash: '#top', query: { lang: $i18n.locale } }" class="mb-7 inline-block">
                <img :src="$require('@/assets/img/Logo_SCTG_long.svg')" alt="SCTG logo"
                  class="h-12 max-w-full contrast-100 brightness-100" />
              </router-link>
              <p class="mb-6 text-base font-medium text-zinc-400">
                {{ $t("footer.slogan") }}
              </p>
              <div class="flex items-center space-x-1 text-xl">
                <a href="javascript:void(0)" name="social-link" aria-label="social-link"
                  class="px-1 text-white hover:text-slate-600">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="javascript:void(0)" name="social-link" aria-label="social-link"
                  class="px-1 text-white hover:text-slate-600">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="javascript:void(0)" name="social-link" aria-label="social-link"
                  class="px-1 text-white hover:text-slate-600">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="javascript:void(0)" name="social-link" aria-label="social-link"
                  class="px-1 text-white hover:text-slate-600">
                  <i class="fa-brands fa-vimeo"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/4 lg:w-1/4 xl:w-1/4">
          <div class="mb-16">
            <h2 class="mb-8 text-2xl font-medium text-white">
              {{ $t("message.us") }}
            </h2>
            <ul>
              <li>
                <router-link :to="{
                  path: '/about',
                  hash: '#top',
                  query: { lang: $i18n.locale },
                }" class="
                    mb-4
                    inline-block
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    ease-in-out
                    duration-150
                    hover:text-white
                  ">
                  {{ $t("footer.about_us") }}
                </router-link>
              </li>
              <li>
                <router-link :to="{
                  path: '/',
                  hash: '#services',
                  query: { lang: $i18n.locale },
                }" class="
                    mb-4
                    inline-block
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    ease-in-out
                    duration-150
                    hover:text-white
                  ">
                  {{ $t("footer.services") }}
                </router-link>
              </li>
              <li>
                <a href="javascript:void(0)" class="
                    mb-4
                    inline-block
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    ease-in-out
                    duration-150
                    hover:text-white
                  ">
                  {{ $t("footer.job_opportunitues") }}
                </a>
              </li>
              <li>
                <router-link :to="{
                  path: '/contact',
                  hash: '#top',
                  query: { lang: $i18n.locale },
                }" class="
                    mb-4
                    inline-block
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    ease-in-out
                    duration-150
                    hover:text-white
                  ">
                  {{ $t("message.contact_us") }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/4 lg:w-1/4 xl:w-2/12">
          <div class="mb-16">
            <h2 class="mb-8 text-2xl font-medium text-white">
              {{ $t("message.client") }}
            </h2>
            <ul>
              <li>
                <a href="javascript:void(0)" class="
                    mb-4
                    inline-block
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    ease-in-out
                    duration-150
                    hover:text-white
                  ">
                  {{ $t("message.client") }}
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="
                    mb-4
                    inline-block
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    ease-in-out
                    duration-150
                    hover:text-white
                  ">
                  {{ $t("message.news") }}
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="
                    mb-4
                    inline-block
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    ease-in-out
                    duration-150
                    hover:text-white
                  ">
                  {{ $t("message.company_legal") }}
                </a>
              </li>
              <li>
                <router-link :to="{
                  path: '/about',
                  hash: '#top',
                  query: { lang: $i18n.locale },
                }" class="
                    mb-4
                    inline-block
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    ease-in-out
                    duration-150
                    hover:text-white
                  ">
                  {{ $t("message.about_us") }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/4 lg:w-1/4 xl:w-1/4">
          <div class="mb-16">
            <h2 class="mb-8 text-2xl font-medium text-white">
              {{ $t("footer.suscribe") }}
            </h2>
            <p class="mb-5 text-base font-medium text-zinc-400">
              {{ $t("footer.newsletter") }}
            </p>
            <form class="relative">
              <input type="email" name="newslettersEmail" :placeholder="$t('message.enter_your_email_address')" class="
                  h-12
                  w-full
                  rounded-lg
                  border border-slate-600
                  bg-transparent
                  pl-5
                  pr-10
                  text-sm
                  font-medium
                  text-white text-ellipsis
                  outline-none
                  focus:border-indigo-600
                " />
              <button type="submit" name="submit" aria-label="submit" class="
                  absolute
                  right-6px
                  -top-1/4
                  flex
                  h-9
                  w-9
                  translate-y-1/2
                  items-center
                  justify-center
                  rounded-md
                  bg-indigo-600
                  text-white
                ">
                <svg width="20" height="20" viewBox="0 0 20 20" class="fill-current">
                  <path d="M1.66669 17.5L19.1667 10L1.66669 2.5V8.33333L14.1667 10L1.66669 11.6667V17.5Z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="border-t-1 border-slate-600">
        <div class="py-7 text-center">
          <p class="text-base font-medium text-zinc-400">
            <span @mouseover="copyright_text = 'build: ' + commit_date"
              @mouseleave="copyright_text = '2018-' + new Date().getFullYear()">{{ $t("footer.copyright") }} {{
              copyright_text }}
              {{ $t("message.company") }} -
              {{ $t("message.all_rights_reserved") }}.</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import commits from '../../commit.json'
import { $require } from '@/utilities/viteHelper.js';
const copyright_text = ref("2018-" + new Date().getFullYear())
const commit_date = new Intl.DateTimeFormat("fr-FR", {
  year: "2-digit",
  month: "short",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
}).format(new Date(commits.vue_sctg))
const date = new Date().getFullYear()
</script>