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
      access_token ({{$t("authorize.validity")}}: {{(new Date(access_token_payload.exp*1000)).toLocaleString($i18n.locale)}}):<br />
      {{$t("authorize.permissions")}}
      <pre>
        {{access_token_payload.permissions}}
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
      id_token ({{$t("authorize.validity")}}: {{(new Date(id_token_payload.exp*1000).toLocaleString($i18n.locale))}}):
      <span class="text-xs" :class="show_id_token ? 'inline' : 'hidden'">{{
        id_token
      }}</span>
    </p>
  </div>
</template>
<script>
import { ref } from "vue";
import * as jose from "jose";
export default {
  name: "AuthPage",
  components: {},
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
      const algorithm = "RS256";
      const x509 = `-----BEGIN CERTIFICATE-----
MIIC/TCCAeWgAwIBAgIJOB18AY7+LiSQMA0GCSqGSIb3DQEBCwUAMBwxGjAYBgNV
BAMTEXNjdGcuZXUuYXV0aDAuY29tMB4XDTIyMDQxNTE2NTkwOVoXDTM1MTIyMzE2
NTkwOVowHDEaMBgGA1UEAxMRc2N0Zy5ldS5hdXRoMC5jb20wggEiMA0GCSqGSIb3
DQEBAQUAA4IBDwAwggEKAoIBAQCamYSv535mi9AlGFRzBQ0rfl1Irxi8hCWxNqii
4QE+lF3t3bSXI50AjDwQYg1TQ1Dy4pZCmQkn9GisbiKf+zpq8y/sQ0vhYpZFNTa2
sWbO8QJ8m/CnYNeq48IJ6u5LiJLlkcyhGSrIXKpjeZ6DnhAPkqx4Yi7T6Ul2jD/Z
839I8reB5+q+qT/wfQWIzXMOFDAiuy3KawLzqLjkmIiAQpbUewEs8UBkrVMMC4SK
yWEG0CYCGMRYKukCpNs2p0xcoS0FS5MuIzidjX+GaWbgbfm54kkiTvRpX89/gZN5
28FLRp7aOT6a4OFJ2vxzfeaIgU7BrzBSTNGl31/8hZi98XWTAgMBAAGjQjBAMA8G
A1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFEqVvVi3Rxt0cP+x4WwfKcq8b3FOMA4G
A1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOCAQEAKZ9Celmd6wKDYw+UlevU
lgxtyoIG5q+6fXbDIiiygoKESX1pCDYZX7mZGLmnIDeGRI9JyNxxnfpUHTNtGbLI
ZTbD7tOFXuPDrIatvDqjoTKHitBOab0Njuz1mAgxwXzlYLAdmC5OqD9z/BYYUCP+
SSIP016J2ImyQ9Bn1IsX7lUIlucwuTkxQ0R5ENF75WZjx+ZRaipmnysTcErRe1V6
GXt/ss75hZGOCFFGzakyJORYpmTkKrU/vai2M8ACvWW2gqPjsqGz5MaA4uofSDem
PZnLn9NFqLPvrN7NsTcctlGEyr46LRXy7xk64E1ZmWUPIPLGJTisEqn0xMiGN7ef
bg==
-----END CERTIFICATE-----`;

      Promise.all([
        jose.importX509(x509, algorithm),
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
