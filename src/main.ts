import { createApp } from "vue";
import App from "@/App.vue";
import { createWebHistory, createRouter } from "vue-router";

import { createI18n } from 'vue-i18n'
import { createPinia } from "pinia";
import enLang from '@/locales/en.json'

type MessageSchema = typeof enLang;

const i18n =createI18n<[MessageSchema | string], 'en' | 'fr' | 'es'>({
  locale: "en",
  legacy: false,
  messages: {
    en: enLang,
    fr: "", //will be lazily loaded in HeaderMain/changeLang(locale)
    es: "",
  },
});

import temp from "@/views/IndexPage.vue"
const routes = [
  {
    path: "/demo",
    component: () => import("@/views/SinglePage.vue"),
    name: 'demo',
  },
  {
    path: "/about",
    component: () => import("@/views/AboutPage.vue"),
    name: 'about',
  },
  {
    path: "/authorize",
    component: () => import("@/views/AuthorizePage.vue"),
    name: 'authorize',
  },
  {
    path: "/contact",
    component: () => import("@/views/ContactPage.vue"),
    name: 'contact',
  },
  {
    path: "/add-shortlink",
    component: () => import("@/views/AddShortLink.vue"),
    name: 'Add short link',
  },
  {
    path: "/list-shorlinks",
    component: () => import("@/views/ListShortLinks.vue"),
    name: 'list short links',
  },
  {
    path: "/web",
    component: () => import("@/views/WebDesignPage.vue"),
    name: 'web',
  },
  {
    path: "/",
    component: () => import("@/views/IndexPage.vue"),
    name: 'index',
  },
  {
    path: "/test",
    component:() => import("@/views/TestVide.vue"),
    name: 'test',
  }
];
const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
  history: createWebHistory(),
  routes,
});

import "@/assets/styles/index.scss";
import * as basiclightbox from "basiclightbox";
//AuthO
import { initAuth0 } from "@/auth0";
import auth0conf from "../auth0-conf.json";

const useImage = (url: string) => {
  return new URL(
    `/src/${url.substring(0, 1) === "@" ? url.substring(2) : url}`,
    import.meta.url
  ).href;
};

const useLightbox = (url) => {
  if (url !== undefined) {
    basiclightbox
      .create(`<img src="${url}" />`)
      .show(() => console.log(`global $lightbox ${url} now visible`));
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $require: typeof useImage;
    $lightbox: typeof useLightbox
  }
}

const pinia = createPinia();
const app = createApp(App);
//window.app = app;
app.use(pinia).use(i18n).use(router);
app.config.globalProperties.$require = useImage;
app.config.globalProperties.$auth0 = initAuth0({
  onRedirectCallback:`${window.location.origin}/authorize`,
  redirectUri: `${window.location.origin}/authorize`,
  ...auth0conf,
});
app.mount("#app");

//Global lightbox function because vue events are not working in slider
app.config.globalProperties.$lightbox = useLightbox