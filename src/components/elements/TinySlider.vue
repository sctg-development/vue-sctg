<template>
  <div class="overflow-hidden">
    <vue-tiny-slider :options="sliderOptions" class="-mx-4 flex">
      <slot/>
    </vue-tiny-slider>
  </div>
</template>
<script>
import VueTinySlider from "@/utilities/VueTinySlider.vue";

const _sliderOptions = {
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayButtonOutput: false,
  mouseDrag: true,
  gutter: 1,
  nav: true,
  navPosition: "bottom",
  controls: true,
  controlsText: [
    '<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.00001 0.0600594L5.00001 4.06006L13.92 4.06006L13.95 6.07006L5.00001 6.07006L5.00001 10.0601L1.19607e-05 5.06006L5.00001 0.0600594Z" fill="white"/></svg>',
    '<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99999 10.9399V6.93994H0.0799875L0.0499878 4.92994H8.99999V0.939941L14 5.93994L8.99999 10.9399Z" fill="white"/> </svg>',
  ],
  items: 1,
  responsive: {
    540: {
      controls: true,
      nav: false,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1140: {
      items: 4,
    },
    1400: {
      items: 5,
    },
  },
};

export default {
    props:{
        sliderOptions: {
            type: Object,
            default: _sliderOptions,
        }
    },
  data() {
    return {
    };
  },
  components: {
    VueTinySlider,

  },
};
</script>

<style>
.tns-controls {
  position: absolute;
  top: -4rem;
  right: 0;
  display: flex;
  align-items: center;
}

.tns-controls > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.tns-controls button {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
  --tw-border-opacity: 12%;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.05;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.tns-controls button:hover {
  --tw-border-opacity: 1;
  border-color: rgb(81 66 252 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(81 66 252 / var(--tw-bg-opacity));
}

.tns-nav {
  display: flex;
  justify-content: center;
}

.tns-nav > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.tns-nav button {
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 9999px;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
  transition-property: color, background-color, border-color, fill, stroke,
    opacity, box-shadow, transform, filter, -webkit-text-decoration-color,
    -webkit-backdrop-filter;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tns-nav button:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(81 66 252 / var(--tw-bg-opacity));
}

.tns-nav .tns-nav-active {
  --tw-bg-opacity: 1;
  background-color: rgb(81 66 252 / var(--tw-bg-opacity));
}
</style>