<template>
  <div>
    <h3 class="text-white" v-if="formerrors.length">
      <b>{{ t("add_short_link.errormsg") }}</b>
      <ul>
        <li v-for="error in formerrors" :key="error.id">
          <!-- eslint-disable-line -->
          {{ error }}
        </li>
      </ul>
    </h3>
    <form
      v-if="canAddShortUrl"
      @submit="checkForm"
      @submit.prevent="submitForm"
    >
      <label for="longurl" class="mb-3 block text-white">
        {{ t("add_short_link.longurl_title") }}
      </label>
      <input
        type="text"
        name="longurl"
        v-model="longurl"
        id="longurl"
        :placeholder="t('add_short_link.longurl_help')"
        class="w-full bg-slate-600 rounded border text-white focus:bg-slate-400"
      />
      <div v-if="expiration == 0">
        <label for="description" class="mb-3 block text-white">
          {{ t("add_short_link.description_title") }}
        </label>
        <input
          type="text"
          name="description"
          v-model="description"
          id="description"
          :placeholder="t('add_short_link.description_help')"
          class="
            w-full
            bg-slate-600
            rounded
            border
            text-white
            focus:bg-slate-400
          "
        />
        <select
          name="ttl"
          id="input-ttl"
          v-model="linkTtl"
          class="
            text-xs
            bg-slate-600
            rounded
            border
            text-white
            focus:bg-slate-400
          "
        >
          <option value="3600">1 {{ t("add_short_link.hour") }}</option>
          <option value="21600">6 {{ t("add_short_link.hour") }}</option>
          <option value="43200">12 {{ t("add_short_link.hour") }}</option>
          <option value="86400" selected>
            1 {{ t("add_short_link.day") }}
          </option>
          <option value="604800">1 {{ t("add_short_link.week") }}</option>
          <option value="2592000">1 {{ t("add_short_link.month") }}</option>
          <option value="15778476">6 {{ t("add_short_link.month") }}</option>
          <option value="31556952">1 {{ t("add_short_link.year") }}</option>
          <option value="2145872736">68 {{ t("add_short_link.year") }}</option>
        </select>
        <button
          v-if="!formVerified"
          type="submit"
          class="
            bg-camelot-500
            text-white
            active:bg-slate-50
            text-xs
            font-bold
            uppercase
            px-4
            py-2
            rounded
            shadow
            hover:shadow-md
            outline-none
            focus:outline-none
            lg:mr-1 lg:mb-0
            ml-3
            mb-3
            ease-linear
            transition-all
            duration-150
          "
        >
          {{ t("add_short_link.add") }}
        </button>
      </div>
      <div v-else>
        <router-link :to="`/!${slug}`">{{
          `${canonical}!${slug}`
        }}</router-link>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { ref, inject } from "vue";
import { useI18n } from "vue-i18n";
import { isAllowed, AUTH0_PERMISSION } from "./TokenHelper";
import jwks from "../../jwks.json";

// Type definitions
interface Auth0Client {
  getTokenSilentlyVerbose: () => Promise<{ id_token: string; access_token: string }>;
}

// Setup i18n
const { t } = useI18n();

// Inject Auth0 client
const $auth0 = inject<Auth0Client>("auth0");

// Reactive state
const formerrors = ref<string[]>([]);
const longurl = ref("");
const description = ref("");
const linkTtl = ref("86400");
const formVerified = ref(false);
const slug = ref("");
const expiration = ref(0);
const canonical = new URL(window.location.href).origin;
const token = ref("");
const canAddShortUrl = ref(false);

// Fetch token and check permissions
if ($auth0) {
  $auth0.getTokenSilentlyVerbose().then((tokenData) => {
    token.value = tokenData.access_token;
    isAllowed(
      tokenData.access_token,
      jwks.domain,
      Date.now() / 1000,
      AUTH0_PERMISSION.add_short_url
    ).then((hasRight) => {
      canAddShortUrl.value = hasRight;
    });
  });
}

// Methods
function isValidHttpUrl(string: string): boolean {
  let url: URL;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function checkForm(e: Event): boolean {
  if (
    longurl.value.length &&
    isValidHttpUrl(longurl.value) &&
    description.value.length
  ) {
    formerrors.value = [];
    formVerified.value = true;
    return true;
  }
  
  if (!longurl.value.length) {
    formerrors.value.push(t("add_short_link.longurl_error"));
  }
  if (!description.value.length) {
    formerrors.value.push(t("add_short_link.description_error"));
  }
  if (!isValidHttpUrl(longurl.value)) {
    formerrors.value.push(t("add_short_link.longurl_noturl_error"));
  }
  
  e.preventDefault();
  return false;
}

function submitForm(): void {
  if (!formerrors.value.length && formVerified.value && canAddShortUrl.value) {
    fetch("/api/add-short-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({
        url: longurl.value,
        ttl: linkTtl.value,
        description: description.value,
      }),
    })
      .then((res: Response) => res.json())
      .then(
        (data: { slug: string; shortened: string; expiration: number }) => {
          console.log(data);
          if (data.slug !== undefined && data.slug.length) {
            slug.value = data.slug;
            expiration.value = data.expiration;
          }
        }
      );
  }
}
</script>
