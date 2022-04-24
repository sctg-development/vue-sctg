<template>
  <div class="overflow-scroll">
    <table>
      <tr v-for="data in kvData" :key="data.name">
        <td>{{data.name}}</td>
        <td>{{data.value}}</td>
        <td>{{ (data.metadata !==  null) ? data.metadata.description : ''}}</td>
        <td>{{(data.metadata !==  null) && (data.metadata.expiration !==  null) ? `${(new Date(data.metadata.expiration)).toLocaleDateString($i18n.locale)} ${(new Date(data.metadata.expiration)).toLocaleTimeString($i18n.locale)}` : ''}}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { isAllowed, ADD_SHORT_URL } from "./TokenHelper";
import jwks from "../../sctg-jwks.json";

interface kvStore {
  name: string;
  value: string;
  metadata: { description: string; expiration: number };
}

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
