import { createApp } from "vue";
import App from "@/App.vue";
import { createWebHistory, createRouter } from "vue-router";

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: require('@/locales/en.json'),
    fr: "", //will be lazily loaded in HeaderMain/changeLang(locale)
    es: "",
  }
})
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
    path: "/contact",
    component: () => import("@/views/ContactPage.vue"),
    name: 'contact',
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

import "@/assets/styles/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as basiclightbox from "basiclightbox";

const app = createApp(App);
window.app = app;
app.use(i18n).use(router);
app.mount("#app");

//Global lightbox function because vue events are not working in slider
app.config.globalProperties.$lightbox = (url) => {
  if (url !== undefined) {
    basiclightbox
      .create(`<img src="${url}" />`)
      .show(() => console.log(`global $lightbox ${url} now visible`));
  }
};