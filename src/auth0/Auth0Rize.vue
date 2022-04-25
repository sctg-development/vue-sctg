<template>
  <!-- Check that the SDK client is not currently loading before accessing is methods -->
  <div v-if="!$auth0.loading.value">
    <!-- show login when not authenticated -->
    <button
      v-if="!$auth0.isAuthenticated.value"
      @click="login"
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
      type="button"
    >
      Log in
    </button>
    <!-- show logout when authenticated -->
    <button
      v-if="$auth0.isAuthenticated.value"
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
      @click="logout"
    >
      {{$t("message.logout")}}( {{ $auth0.user.value.name }} )
    </button>
    <button
      v-if="$auth0.isAuthenticated.value"
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
      @click="getToken()"
    >
      {{$t("authorize.get_token")}}
    </button>
    <p
      v-if="access_token"
      class="text-white pt-8 text-normal font-mono break-all text-justify"
      @click="show_access_token = !show_access_token"
    >
      access_token ({{$t("authorize.validity")}}: {{access_token_payload !== undefined ? (new Date(access_token_payload.exp*1000)).toLocaleString($i18n.locale) : ""}}):<br />
      {{$t("authorize.permissions")}}
      <pre>
        {{access_token_payload !== undefined ? access_token_payload.permissions : ""}}
      </pre>
      <span class="text-xs" :class="show_access_token ? 'inline' : 'hidden'">{{
        access_token
      }}</span>
    </p>
    <p
      v-if="id_token"
      class="text-white pt-8 pb-8 text-normal font-mono break-all text-justify"
      @click="show_id_token = !show_id_token"
    >
      id_token ({{$t("authorize.validity")}}: {{id_token_payload !== undefined ? (new Date(id_token_payload.exp*1000).toLocaleString($i18n.locale)) : ""}}):
      <span class="text-xs" :class="show_id_token ? 'inline' : 'hidden'">{{
        id_token
      }}</span>
    </p>
  </div>
</template>
<script>
import { ref } from "vue";
import * as jose from "jose";
import jwks from "../../jwks.json";
const x509cert = `-----BEGIN CERTIFICATE-----\n${jwks.keys[0].x5c}\n-----END CERTIFICATE-----`;
const algorithm = "RS256";

export default {
  name: "AuthPage",
  access_token: "",
  access_token_payload: {},
  id_token: "",
  id_token_payload: {},
  show_access_token: false,
  shown_id_token: false,
  data() {
    return {
      user: this.user,
      access_token: ref(this.access_token),
      access_token_payload: this.access_token_payload,
      id_token: ref(this.id_token),
      id_token_payload: this.id_token_payload,
      show_access_token: this.show_access_token,
      show_id_token: this.show_id_token
    };
  },
  methods: {
    // Log the user in
    login() {
      this.$auth0.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth0.logout({
        returnTo: window.location.origin,
      });
    },
    getToken() {
      Promise.all([
        jose.importX509(x509cert, algorithm),
        this.$auth0.getTokenSilentlyVerbose(),
      ]).then((values) => {
        const pubkey = values[0];
        const token = values[1];
        this.access_token = token.access_token;
        this.id_token = token.id_token;
        jose
          .jwtVerify(token.id_token, pubkey)
          .then((jwt) => {
            this.id_token_payload = jwt.payload;
          });
        jose
          .jwtVerify(token.access_token, pubkey)
          .then((jwt) => {
            this.access_token_payload = jwt.payload;
          });
        this.token = token;
      });
    },
  },
};
</script>
