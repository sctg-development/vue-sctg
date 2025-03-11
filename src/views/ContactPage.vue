<template>
  <div id="top" class="bg-slate-900 min-h-screen relative">
    <header-main />
    <main-section>
      <section id="content">
        <div class="
            flex
            justify-center
            items-center
            sm:min-h-screen-1/3
            w-full
            mx-auto
            sm:max-w-screen-sm
            md:max-w-screen-md
            lg:max-w-screen-lg
            xl:max-w-screen-xl
            2xl:max-w-screen-xl
          ">
          <div class="px-4 min-w-2/3">
            <div class="relative z-10 overflow-hidden rounded-lg bg-slate-800">
              <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4 lg:pr-8 lg:w-5/12 xl:w-1/3 items-center">
                  <div class="
                      relative
                      h-full
                      z-10
                      flex flex-col
                      justify-between
                      py-20
                      pr-5
                      lg:text-right
                      bg-indigo-600
                    ">
                    <div class="mb-16 lg:mb-56">
                      <div class="
                          mb-4
                          text-4xl
                          pl-4
                          font-bold
                          text-white
                          sm:text-5xl
                        ">
                        {{ t("contact.title") }}
                      </div>
                      <div class="absolute bottom-4 right-4">
                        <div class="mt-16 mb-16">
                          <p class="text-lg font-bold text-white sm:text-xl">
                            <span class="block">
                              {{ t("contact.contact_email") }}
                            </span>
                            <span class="block">
                              {{ t("websites.webdesign_phone") }}
                            </span>
                            <span class="block">
                              {{ t("websites.webdesign_open_days") }}
                            </span>
                            <span class="block">
                              {{ t("websites.webdesign_open_hours") }}
                            </span>
                          </p>
                        </div>
                        <div>
                          <p class="mb-3 text-xl font-bold text-white">
                            {{ t("websites.follow") }}
                          </p>
                          <div class="flex items-center trext-xl space-x-1 lg:justify-end">
                            <a href="javascript:void(0)" class="text-white hover:text-white/80">
                              <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="javascript:void(0)" class="text-white hover:text-white/80">
                              <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="javascript:void(0)" class="text-white hover:text-white/80">
                              <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="javascript:void(0)" class="text-white hover:text-white/80">
                              <i class="fa-brands fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span class="absolute left-3 bottom-6 -z-10">
                        <img src="../assets/img/dots.svg" />
                      </span>
                      <span class="absolute right-0 bottom-1/2 -z-10">
                        <img src="../assets/img/circle.svg" />
                      </span>
                      <span class="absolute left-1/4 bottom-1/2 -z-10">
                        <img src="../assets/img/triangle.svg" />
                      </span>
                      <span class="absolute left-0 bottom-1/4 -z-10">
                        <img src="../assets/img/broken.svg" />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="w-full px-8 lg:w-5/12 xl:w-2/3">
                  <div class="pt-20 pb-8">
                    <div class="mb-12 max-w-[410px]">
                      <h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl">
                        {{ t("contact.subtitle") }}
                      </h2>
                      <h3 class="text-white" v-if="formerrors.length">
                        <b>{{ t("contact.errormsg") }}</b>
                        <ul>
                          <li v-for="error in formerrors" :key="error.id">
                            <!-- eslint-disable-line -->
                            {{ error }}
                          </li>
                        </ul>
                      </h3>
                      <p class="text-white text-xl">
                        {{ t("contact.slogan") }}
                      </p>
                    </div>
                    <form @submit="checkForm" @submit.prevent="submitForm">
                      <div class="flex flex-wrap -mx-3">
                        <div class="w-full px-3 md:w-1/2">
                          <div class="mb-5">
                            <label for="name" class="mb-3 block text-white">
                              {{ t("contact.name") }}
                            </label>
                            <input v-if="!fromSendEmail" type="text" name="name" id="name" v-model="name"
                              :placeholder="t('contact.namemsg')" class="
                                w-full
                                bg-slate-600
                                rounded
                                border
                                text-white
                                focus:bg-slate-400
                              " />
                          </div>
                        </div>
                        <div class="w-full px-3 md:w-1/2">
                          <div class="mb-5">
                            <label for="email" class="mb-3 block text-white">
                              {{ t("contact.email") }}
                            </label>
                            <input v-if="!fromSendEmail" type="email" name="email" v-model="email" id="email"
                              :placeholder="t('contact.mailmsg')" class="
                                w-full
                                bg-slate-600
                                rounded
                                border
                                text-white
                                focus:bg-slate-400
                              " />
                          </div>
                        </div>
                        <div class="w-full px-3">
                          <div class="mb-8">
                            <label for="" class="mb-3 block text-white">
                              {{ t("contact.message") }}
                            </label>
                            <textarea v-if="!fromSendEmail" rows="5" name="message" id="message" v-model="message"
                              :placeholder="t('contact.msgmsg')" class="
                                w-full
                                bg-slate-600
                                rounded
                                border
                                text-white
                                focus:bg-slate-400
                              "></textarea>
                          </div>
                        </div>
                        <div class="w-full px-3">
                          <div class="mb-8 flex flex-nowrap items-center">
                            <input type="checkbox" name="agreement" id="agreement" v-model="agreement" class="
                                appearance-none
                                h-4
                                w-4
                                border border-gray-300
                                rounded-sm
                                bg-white
                                checked:bg-blue-600 checked:border-blue-600
                                focus:outline-none
                                transition
                                duration-200
                                align-top
                                mr-2
                                cursor-pointer
                              " />
                            <label for="agreement" class="
                                inline-block
                                text-white
                                text-xs
                              ">
                              {{ t("contact.agreement") }}
                            </label>
                          </div>
                        </div>
                        <div class="flex justify-center w-full mt-4">
                          <vue-hcaptcha v-if="formVerified && !fromSendEmail" :sitekey="hCaptcha_sitekey" theme="dark"
                            class="flex justify-center rounded"
                            :apiEndpoint="`https://hcaptcha.com/1/api.js?hl={$i18n.locale}`" @verify="hCaptchaVerify"
                            @expired="hCaptchaExpire" @challenge-expired="hCaptchaChallengeExpire"
                            @error="hCaptchaError"></vue-hcaptcha>
                          <!-- :type="'hidde'+'n'" is a workaround for avoiding mangling like tailwind class hidden -->
                          <input :type="'hidde' + 'n'" name="ekey" id="ekey" v-model="hCaptcha_eKey" />
                          <input :type="'hidde' + 'n'" name="token" id="etoken" v-model="hCaptcha_token" />
                          <input :type="'hidde' + 'n'" name="sitekey" id="sitekey" v-model="hCaptcha_sitekey" />
                          <button v-if="!formVerified" type="submit" class="
                              bg-indigo-600
                              px-3
                              py-3
                              rounded
                              text-white
                              hover:bg-indigo-400
                            ">
                            {{ t("contact.send") }}
                          </button>
                          <div v-if="fromSendEmail" class="
                              text-white
                              p-2
                              bg-indigo-600
                              rounded
                              text-2xl
                              font-semibold
                            ">
                            <h4 v-if="
                              fromSendEmail &&
                              sendemailRet.hCaptchaResponse &&
                              sendemailRet.mailjetResponse == 'OK'
                            ">
                              {{ t("contact.sent") }}
                            </h4>
                            <h4 v-else>
                              {{ t("contact.notsent") }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main-section>
    <footer-main class="absolute" />
  </div>
</template>
<script setup lang="ts">
import HeaderMain from "@/components/HeaderMain.vue";
import MainSection from "@/components/elements/MainSection.vue";
import FooterMain from "@/components/FooterMain.vue";
import VueHcaptcha from "@/hCaptcha/hcaptcha.vue";
import { getCloudinaryImg } from "@/utilities/utilities";
import { ref, reactive } from "vue";
import { $require } from '@/utilities/viteHelper.js';
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const $route = useRoute()
const {locale,t} = useI18n()
$route.query.lang !== undefined ?
      $route.query.lang == "fr" || $route.query.lang == "fr"
        ? (locale.value = $route.query.lang)
         : ""
       : "";

const formerrors = ref([]);
const formVerified = ref(false);
const hCaptcha_sitekey = ref("2d45ebeb-7ce3-4d67-bf92-a1f6b40716a7");
const hCaptcha_verified = ref(false);
const hCaptcha_expired = ref(false);
const hCaptcha_token = ref("");
const hCaptcha_eKey = ref("");
const hCaptcha_error = ref("");
const name = ref("");
const email = ref("");
const message = ref("");
const agreement = ref(false);
const email_sent = ref(false);
const fromSendEmail = ref(false);
const sendemailRet = reactive({
  executed: false,
  hCaptchaResponse: false,
  mailjetResponse: "Unauthorized",
});
const checkForm = (e: { preventDefault: () => void; }) => {
  if (name.value.length && email.value.length && message.value.length && agreement.value ) {
    formerrors.value = [];
    return true;
  }
  formerrors.value = [];

  if (!name.value.length) {
    formerrors.value.push(t('contact.errorname'));
  }
  if (!email.value.length) {
    formerrors.value.push(t('contact.erroremail'));
  }
  if (!message.value.length) {
    formerrors.value.push(t('contact.errormessage'));
  }
  if (!agreement.value) {
    formerrors.value.push(t("contact.disagree"));
  }
  e.preventDefault();
}

function hCaptchaVerify(tokenStr: string, ekey: string) {
  hCaptcha_verified.value = true;
  hCaptcha_token.value = tokenStr;
  hCaptcha_eKey.value = ekey;
  if (!formerrors.value.length) {
    fetch("/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
        sitekey: hCaptcha_sitekey.value,
        token: hCaptcha_token.value,
        ekey: hCaptcha_eKey.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        sendemailRet.executed = true;
        sendemailRet.hCaptchaResponse = data.hCaptchaResponse;
        sendemailRet.mailjetResponse = data.mailjetResponse;
        fromSendEmail.value = (
          data.hCaptchaResponse &&
          (data.mailjetResponse != "ERROR" ? true : false)
        );
      });
  }
}
function hCaptchaExpire() {
  hCaptcha_verified.value = false;
  hCaptcha_token.value = null;
  hCaptcha_eKey.value = null;
  hCaptcha_expired.value = true;
  console.log("Expired");
}
function hCaptchaChallengeExpire() {
  hCaptcha_verified.value = false;
  hCaptcha_token.value = null;
  hCaptcha_eKey.value = null;
  hCaptcha_expired.value = true;
  console.log("Challenge expired");
}
function hCaptchaError(err: string) {
  hCaptcha_token.value = null;
  hCaptcha_eKey.value = null;
  hCaptcha_error.value = err;
  console.log(`Error: ${err}`);
}
function hCaptchaSubmit() {
  console.log("Submitting the invisible hCaptcha");
  // todo.execute();
}
function submitForm() {
  if (!formerrors.value.length && name.value.length && email.value.length && message.value.length ) {
    formVerified.value = true;
  }
}

</script>