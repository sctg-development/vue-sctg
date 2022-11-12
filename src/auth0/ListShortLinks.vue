<template>
  <div class="overflow-scroll">
    <table>
      <tr v-for="data in kvData" :key="data.name">
        <td>{{ data.name }}</td>
        <td>{{ data.description }}</td>
        <td>{{ (new Date(data.expiration)).toLocaleDateString($i18n.locale) }}</td>
        <td><a :href="data.value">link</a></td>
      </tr>
    </table>
    <a :href="`data:octet/stream;charset=utf-8,${encodeURIComponent(JSON.stringify(kvData))}`" download="kv.json">db
      source</a>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { isAllowed, AUTH0_PERMISSION } from "./TokenHelper";
import jwks from "../../jwks.json";
import { getAuth0 } from '@/auth0';

interface kvStoreElement {
  name: string;
  value: string;
  description: string;
  expiration: number;
  auth0Domain_hash: number;
}
type kvStore = kvStoreElement[]

const canonical = new URL(window.location.origin);
const canListShortUrl = ref(false);
const kvData = ref(null as kvStore);
const $auth0 = getAuth0()

onMounted(() => {
  $auth0
    .getTokenSilentlyVerbose()
    .then((token: { id_token: string; access_token: string }) => {
      isAllowed(
        token.access_token,
        jwks.domain,
        Date.now() / 1000,
        AUTH0_PERMISSION.list_all_short_url
      )
        .then((hasRight) => {
          canListShortUrl.value = hasRight;
        })
        .then(() => {
          fetch("/api/list-short-url", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.access_token}`,
            },
            body: JSON.stringify({}),
          })
            .then((res: Response) => {
              return res.json();
            })
            .then((data: kvStore) => {
              console.log(data);
              kvData.value = data;
            });
        });
    });
})
</script>
