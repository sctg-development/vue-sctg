<template> <!-- eslint-disable vue/no-multiple-template-root-->
  <mini-card
    :imgurl="getCloudinaryImg('web-design-tools', 70,70).toURL()"
    title="@ronan"
    subtitle="dev"
  />
  <mini-card
    :imgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 70,70).toURL()"
    title="@audrey"
    subtitle="admin"
  />
  <mini-card
    :imgurl="getCloudinaryImg('glenn-carstens-peters', 70,70).toURL()"
    title="@françois"
    subtitle="admin"
  />
  <mini-card
    :imgurl="getCloudinaryImg('responsive-web-design', 70,70).toURL()"
    title="@briac"
    subtitle="design"
  />
  <mini-card
    :imgurl="getCloudinaryImg('formula', 70,70).toURL()"
    title="@klervi"
    subtitle="design"
  />
  <mini-card
    :imgurl="getCloudinaryImg('mimi-thian', 70,70).toURL()"
    title="@vincent"
    subtitle="net"
  />
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
import MiniCard from "@/components/cards/Type1Card.vue";
import {
  getCloudinaryImg,
} from "@/utilities/utilities";
</script>