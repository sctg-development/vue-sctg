<template>
  <div class="overflow-scroll">
    <table>
      <tr v-for="data in kvData" :key="data.name">
        <td>{{ data.name }}</td>
        <td>{{ data.description }}</td>
        <td>{{ (new Date(data.expiration)).toLocaleDateString(locale) }}</td>
        <td><a :href="data.value">link</a></td>
      </tr>
    </table>
    <a :href="`data:octet/stream;charset=utf-8,${encodeURIComponent(JSON.stringify(kvData))}`" download="kv.json">db
      source</a>
  </div>
</template>
<script setup lang="ts">
/**
=========================================================
* © 2019-2025 Ronan LE MEILLAT for SCTG Development
* 
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
=========================================================
*/
import { onMounted, ref } from "vue";
import { isAllowed, AUTH0_PERMISSION } from "./TokenHelper";
import jwks from "../../jwks.json";
import { getAuth0 } from '@/auth0';
import { useI18n } from "vue-i18n";

interface kvStoreElement {
  name: string;
  value: string;
  description: string;
  expiration: number;
  auth0Domain_hash: number;
}
type kvStore = kvStoreElement[]

const canListShortUrl = ref(false);
const kvData = ref(null as kvStore);
const $auth0 = getAuth0()
const { locale } = useI18n()

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
