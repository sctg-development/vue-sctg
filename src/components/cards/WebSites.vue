<template>
  <!-- eslint-disable vue/no-multiple-template-root-->
  <type2-card title="innnov analysis" :imgurl="getCloudinaryImg('ias-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('ias-web').toURL()" author="@innov" authorTitle="dev"
    :baseMessage="t('services.design_hosting')" value="wordpress" />
  <type2-card title="silo smeg" :imgurl="getCloudinaryImg('smeg-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('smeg-web').toURL()" author="@smeg" authorTitle="dev"
    :baseMessage="t('services.design_hosting')" value="react" />
  <type2-card title="high can fly" :imgurl="getCloudinaryImg('highcanfly-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('highcanfly-web').toURL()" author="@highcanfly" authorTitle="dev"
    :baseMessage="t('services.design')" value="vue3" />
  <type2-card title="cdvl 59" :imgurl="getCloudinaryImg('cdvl59-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('cdvl59-web').toURL()" author="@cdvl59" authorTitle="dev"
    :baseMessage="t('services.design')" value="vue3" />
  <type2-card title="ski-sensations" :imgurl="getCloudinaryImg('skisensations-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('skisensations-web').toURL()" author="@ronan" authorTitle="dev"
    :baseMessage="t('services.design')" value="vue3" />
  <type2-card title="Les Ailes du Mont-Blanc" :imgurl="getCloudinaryImg('LesAiles', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('LesAiles').toURL()" author="@ronan" authorTitle="dev"
    :baseMessage="t('services.design')" value="vue3" />
  <type2-card title="vdo com" :imgurl="getCloudinaryImg('vdocom-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('vdocom-web').toURL()" author="@vdocom" authorTitle="dev"
    :baseMessage="t('services.design_hosting')" value="php" />
  <type2-card title="cfd marche et vol" :imgurl="getCloudinaryImg('cfdmv-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('cfdmv-web').toURL()" author="@ffvl" authorTitle="dev"
    :baseMessage="t('services.web_app')" value="js" />
  <type2-card title="tma lille 3.1" :imgurl="getCloudinaryImg('tmalille31-web', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('tmalille31-web').toURL()" author="@cdvl59" authorTitle="dev"
    baseMessage="laravel app" value="laravel" />
  <type2-card title="lorany" :imgurl="getCloudinaryImg('lorany-dolly', 250, 250).toURL()"
    :miniImgurl="getCloudinaryImg('Logo_SCTG_carre_3D', 50, 50).toURL()"
    :lightboxUrl="getCloudinaryImg('lorany-dolly').toURL()" author="@lorany" authorTitle="dev"
    baseMessage="dolibarr-hosting" value="dolibarr" />
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n({})
import Type2Card from "@/components/cards/Type2Card.vue";
import { getCloudinaryImg } from "@/utilities/utilities";

</script>
