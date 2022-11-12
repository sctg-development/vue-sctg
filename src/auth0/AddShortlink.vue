<template>
  <div>
    <h3 class="text-white" v-if="formerrors.length">
      <b>{{ $t("add_short_link.errormsg") }}</b>
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
        {{ $t("add_short_link.longurl_title") }}
      </label>
      <input
        type="text"
        name="longurl"
        v-model="longurl"
        id="longurl"
        :placeholder="$t('add_short_link.longurl_help')"
        class="w-full bg-slate-600 rounded border text-white focus:bg-slate-400"
      />
      <div v-if="expiration == 0">
        <label for="description" class="mb-3 block text-white">
          {{ $t("add_short_link.description_title") }}
        </label>
        <input
          type="text"
          name="description"
          v-model="description"
          id="description"
          :placeholder="$t('add_short_link.description_help')"
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
          <option value="3600">1 {{ $t("add_short_link.hour") }}</option>
          <option value="21600">6 {{ $t("add_short_link.hour") }}</option>
          <option value="43200">12 {{ $t("add_short_link.hour") }}</option>
          <option value="86400" selected>
            1 {{ $t("add_short_link.day") }}
          </option>
          <option value="604800">1 {{ $t("add_short_link.week") }}</option>
          <option value="2592000">1 {{ $t("add_short_link.month") }}</option>
          <option value="15778476">6 {{ $t("add_short_link.month") }}</option>
          <option value="31556952">1 {{ $t("add_short_link.year") }}</option>
          <option value="2145872736">68 {{ $t("add_short_link.year") }}</option>
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
          {{ $t("add_short_link.add") }}
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

import { defineComponent, ref } from "vue";
import { isAllowed, AUTH0_PERMISSION } from "./TokenHelper";
import jwks from "../../jwks.json";

export default defineComponent<{ token: string; canAddShortUrl: boolean }>({
  token: "",
  canAddShortUrl: false,
  data() {
    const formerrors: string[] = [];
    const longurl = ref("");
    const description = ref("");
    const linkTtl = ref("86400");
    const formVerified = ref(false);
    const slug = ref("");
    const expiration = ref(0);
    const canonical = new URL(window.location.origin);

    this.$auth0.getTokenSilentlyVerbose().then((token:{id_token:string,access_token:string}) => {
      this.token = token.access_token;
      isAllowed(
        token.access_token,
        jwks.domain,
        Date.now() / 1000,
        AUTH0_PERMISSION.add_short_url
      ).then((hasRight) => {
        this.canAddShortUrl = hasRight;
      });
    });
    return {
      longurl,
      linkTtl,
      description,
      formerrors,
      formVerified,
      canAddShortUrl: ref(this.canAddShortUrl),
      canonical,
      slug,
      expiration,
    };
  },
  methods: {
    isValidHttpUrl: function (string: string): boolean {
      let url: URL;

      try {
        url = new URL(string);
      } catch (_) {
        return false;
      }

      return url.protocol === "http:" || url.protocol === "https:";
    },
    checkForm: function (e): boolean {
      if (
        this.longurl.length &&
        this.isValidHttpUrl(this.longurl) &&
        this.description.length
      ) {
        this.formerrors = [];
        this.formVerified = true;
        return true;
      }
      if (!this.longurl.length) {
        this.formerrors.push(this.$t("add_short_link.longurl_error"));
      }
      if (!this.description.length) {
        this.formerrors.push(this.$t("add_short_link.description_error"));
      }
      if (!this.isValidHttpUrl(this.longurl)) {
        this.formerrors.push(this.$t("add_short_link.longurl_noturl_error"));
      }
      e.preventDefault();
    },
    submitForm: function (): void {
      if (!this.formerrors.length && this.formVerified && this.canAddShortUrl) {
        fetch("/api/add-short-url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify({
            url: this.longurl,
            ttl: this.linkTtl,
            description: this.description,
          }),
        })
          .then((res: Response) => {
            return res.json();
          })
          .then(
            (data: { slug: string; shortened: string; expiration: number }) => {
              console.log(data);
              if (data.slug !== undefined && data.slug.length) {
                this.slug = data.slug;
                this.expiration = data.expiration;
              }
            }
          );
      }
    },
  },
});
</script>
