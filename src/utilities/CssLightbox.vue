<!--
=========================================================
* © 2022 Ronan LE MEILLAT for SCTG
=========================================================
This website use:
- Vuejs v3
- Font Awesome
- And many others
-->
<template>
    <div>
        <span class="cursor-pointer" @click="opened = true">
            <img ref="imgElement" :src="srcImage" @load="load" @error="error">
        </span>
        <span class="fixed z-999 inset-0 p-4 bg-slate-900 bg-opacity-80 justify-center"
            :class="opened ? 'flex' : 'hidden'">
            <transition enter-active-class="transition-opacity ease-in duration-500"
                leave-active-class="transition-opacity ease-in duration-500" enter-from-class="opacity-0"
                leave-to-class="opacity-0">
                <img v-if="opened" @click="opened=false" class="max-h-screen-95 rounded-xl m-auto "
                    :src="fullScreenSrcImage" />
            </transition>
        </span>
    </div>
</template>
<script setup lang="ts">
import { computed, onBeforeMount, onBeforeUnmount, onMounted, reactive, Ref, ref } from 'vue';
const emit = defineEmits(["load", "error", "intersect"])
const imgElement = ref(null) as Ref<HTMLImageElement>
const srcMiniImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
const props = withDefaults(defineProps<{ src: string; fullScreenSrc?: string; lazy?: boolean }>(), { src: '', fullScreenSrc: '', lazy: false })
const altSrc = ref(props.src)
const opened = ref(false)
const state = reactive({
    observer: null,
    intersected: false,
    loaded: false
});

const srcImage = computed(() =>
    (state.intersected || !props.lazy) && props.src ? props.src : srcMiniImage
);
const fullScreenSrcImage = computed(() =>
    (state.intersected || !props.lazy) && altSrc.value ? altSrc.value : srcMiniImage
);

const load = () => {
    if (
        imgElement.value &&
        imgElement.value.src !== srcMiniImage
    ) {
        state.loaded = true;
        emit("load", imgElement.value);
    }
};

const error = () => emit("error", imgElement.value);

onBeforeMount(() => {
    if (props.fullScreenSrc !== '') {
        altSrc.value = props.fullScreenSrc
    }
})

onMounted(() => {
    if ("IntersectionObserver" in window && props.lazy) {
        state.observer = new IntersectionObserver((entries) => {
            const image = entries[0];
            if (image.isIntersecting) {
                state.intersected = true;
                state.observer.disconnect();
                emit("intersect");
            }
        }, {});

        state.observer.observe(imgElement.value);
    }
});

onBeforeUnmount(() => {
    if ("IntersectionObserver" in window && state.observer && props.lazy) {
        state.observer.disconnect();
    }
});
</script>
