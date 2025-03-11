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
import MiniCard from "@/components/cards/Type1Card.vue";
import {
  getCloudinaryImg,
} from "@/utilities/utilities";
</script>