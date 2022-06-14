<template>
<!-- eslint-disable vue/no-multiple-template-root-->
  <type-2-card
    title="innnov analysis"
    :imgurl="getCloudinaryImg('ias-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('ias-web').toURL()"
    author="@innov"
    authorTitle="dev"
    :baseMessage="$t('services.design_hosting')"
    value="wordpress"
  />
  <type-2-card
    title="silo smeg"
    :imgurl="getCloudinaryImg('smeg-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('smeg-web').toURL()"
    author="@smeg"
    authorTitle="dev"
    :baseMessage="$t('services.design_hosting')"
    value="react"
  />
  <type-2-card
    title="high can fly"
    :imgurl="getCloudinaryImg('highcanfly-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('highcanfly-web').toURL()"
    author="@highcanfly"
    authorTitle="dev"
    :baseMessage="$t('services.design')"
    value="vue3"
  />
  <type-2-card
    title="cdvl 59"
    :imgurl="getCloudinaryImg('cdvl59-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('cdvl59-web').toURL()"
    author="@cdvl59"
    authorTitle="dev"
    :baseMessage="$t('services.design')"
    value="vue3"
  />
  <type-2-card
    title="vdo com"
    :imgurl="getCloudinaryImg('vdocom-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('vdocom-web').toURL()"
    author="@vdocom"
    authorTitle="dev"
    :baseMessage="$t('services.design_hosting')"
    value="php"
  />
  <type-2-card
    title="cfd marche et vol"
    :imgurl="getCloudinaryImg('cfdmv-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('cfdmv-web').toURL()"
    author="@ffvl"
    authorTitle="dev"
    :baseMessage="$t('services.web_app')"
    value="js"
  />
  <type-2-card
    title="tma lille 3.1"
    :imgurl="getCloudinaryImg('tmalille31-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('tmalille31-web').toURL()"
    author="@cdvl59"
    authorTitle="dev"
    baseMessage="laravel app"
    value="laravel"
  />
  <type-2-card
    title="lorany"
    :imgurl="getCloudinaryImg('lorany-dolly', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('lorany-dolly').toURL()"
    author="@lorany"
    authorTitle="dev"
    baseMessage="dolibarr-hosting"
    value="dolibarr"
  />
</template>
<script>
import Type2Card from "@/components/cards/Type2Card.vue";
import { getCloudinaryImg } from "@/utilities/utilities";

export default {
    data(){
        return {getCloudinaryImg};
    },
    components:{
        Type2Card,
    }
}
</script>
