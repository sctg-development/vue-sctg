<template>
  <div class="overflow-scroll">
    <table>
      <tr v-for="data in kvData" :key="data.name">
        <td>{{data.name}}</td>
        <td>{{data.description}}</td>
        <td>{{(new Date(data.expiration)).toLocaleDateString($i18n.locale)}}</td>
        <td><a :href="data.value">link</a></td>
      </tr>
    </table>
    <a :href="`data:octet/stream;charset=utf-8,${encodeURIComponent(JSON.stringify(kvData))}`" download="kv.json">db source</a>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { isAllowed, ADD_SHORT_URL } from "./TokenHelper";
import jwks from "../../jwks.json";

interface kvStoreElement {
  name: string;
  value: string;
  description: string;
  expiration: number;
  auth0Domain_hash: number;
}
type kvStore = kvStoreElement[]

export default defineComponent<{
  token: string;
  canListShortUrl: boolean;
  kvData: kvStore;
}>({
  token: "",
  canListShortUrl: false,
  kvData: {},
  mounted() {
    this.$auth0
      .getTokenSilentlyVerbose()
      .then((token: { id_token: string; access_token: string }) => {
        this.token = token.access_token;
        isAllowed(
          token.access_token,
          jwks.domain,
          Date.now() / 1000,
          ADD_SHORT_URL
        )
          .then((hasRight) => {
            this.canListShortUrl = hasRight;
          })
          .then(() => {
            fetch("/api/list-short-url", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
              },
              body: JSON.stringify({}),
            })
              .then((res: Response) => {
                return res.json();
              })
              .then((data: kvStore) => {
                console.log(data);
                this.kvData = data;
              });
          });
      });
  },
  data() {
    return {
      canListShortUrl: ref(this.canListShortUrl),
      kvData: ref(this.kvData),
    };
  },
  methods: {},
});
</script>
