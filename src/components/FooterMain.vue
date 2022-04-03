<template>
  <footer class="bg-slate-800 pt-24 inline-block w-full mt-8 bottom-0 right-0">
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
      <div class="-mx-4 flex flex-wrap px-7">
        <div class="w-full px-4 sm:w-1/4 lg:w-1/4 xl:w-1/3">
          <div class="mb-16">
            <div class="max-w-[300px]">
              <router-link :to="{ path: '/', hash: '#top', query: { lang: $i18n.locale } }" class="mb-7 inline-block">
                <img
                  :src="require('@/assets/img/Logo_SCTG_long.svg')"
                  alt="SCTG logo"
                  class="h-12 max-w-full contrast-100 brightness-100"
                />
              </router-link>
              <p class="mb-6 text-base font-medium text-zinc-400">
                {{$t('footer.slogan')}}
              </p>
              <div class="flex items-center">
                <a
                  href="javascript:void(0)"
                  name="social-link"
                  aria-label="social-link"
                  class="mr-5 text-white hover:text-slate-600"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/4 lg:w-1/4 xl:w-1/4">
          <div class="mb-16">
            <h2 class="mb-8 text-2xl font-medium text-white">{{$t('message.us')}}</h2>
            <ul>
              <li>
                <router-link
                  :to="{path:'/about',hash:'#top',query:{lang: $i18n.locale}}"
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
                    {{$t('footer.about_us')}}
                </router-link>
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
                  {{$t('footer.services')}}
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
                  {{$t('footer.job_opportunitues')}}
                </a>
              </li>
              <li>
                <router-link
                  :to="{path:'/contact',hash:'#top',query:{lang: $i18n.locale}}"
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
                  {{$t('message.contact_us')}}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/4 lg:w-1/4 xl:w-2/12">
          <div class="mb-16">
            <h2 class="mb-8 text-2xl font-medium text-white">{{$t('message.client')}}</h2>
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
                  {{$t('message.client')}}
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
                  {{$t('message.news')}}
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
                  {{$t('message.company_legal')}}
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
                  {{$t('message.about_us')}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full px-4 sm:w-1/4 lg:w-1/4 xl:w-1/4">
          <div class="mb-16">
            <h2 class="mb-8 text-2xl font-medium text-white">{{$t('footer.suscribe')}}</h2>
            <p class="mb-5 text-base font-medium text-zinc-400">
              {{$t('footer.newsletter')}}
            </p>
            <form class="relative">
              <input
                type="email"
                name="newslettersEmail"
                :placeholder="$t('message.enter_your_email_address')"
                class="
                  h-12
                  w-full
                  rounded-lg
                  border border-slate-600
                  bg-transparent
                  pl-5
                  pr-10
                  text-sm
                  font-medium
                  text-white
                  text-ellipsis
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
                  right-[6px]
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
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="fill-current"
                >
                  <path
                    d="M1.66669 17.5L19.1667 10L1.66669 2.5V8.33333L14.1667 10L1.66669 11.6667V17.5Z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="border-t-1 border-slate-600">
        <div class="py-7 text-center">
          <p class="text-base font-medium text-zinc-400">
            <span  @mouseover="copyright_text = 'build: ' + commit_date"
              @mouseleave="copyright_text = '2018-' + new Date().getFullYear()">{{$t('footer.copyright')}} {{copyright_text}} {{ $t("message.company") }} -
            {{ $t("message.all_rights_reserved") }}.</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  setup() {
    
  },
  data() {
    return {
      copyright_text: "2018-" + new Date().getFullYear(),
      commit_date: new Intl.DateTimeFormat("fr-FR", {
        year: "2-digit",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
      }).format(new Date(process.env.VUE_APP_GIT_LAST_COMMIT)),
      date: new Date().getFullYear(),
    }
  },
}
</script>