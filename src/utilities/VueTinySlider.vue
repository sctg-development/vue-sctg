<script>
import { ref, onUnmounted, onMounted, h } from "vue";
import { tns } from "tiny-slider/src/tiny-slider";

export default {
  name: "VueTinySlider",
  props: {
    options: {
      type: Object,
      default() {
        return {
          items: 1,
        };
      },
    },
  },
  setup(props, { slots, expose, emit }) {
    const eventsList = [
      "indexChanged",
      "transitionStart",
      "transitionEnd",
      "newBreakpointStart",
      "newBreakpointEnd",
      "touchStart",
      "touchMove",
      "touchEnd",
      "dragStart",
      "dragMove",
      "dragEnd",
    ];
    const root = ref(null);
    let slider;

    onMounted(() => {
      slider = tns({
        container: root.value,
        ...props.options,
      });

      eventsList.forEach((ev) => {
        // @ts-ignore
        slider.events.on(ev, function (info, eventName) {
          emit(eventName, info);
        });
      });
    });
    onUnmounted(() => {
      slider.destroy();
    });

    expose({
      // Same as https://github.com/ganlanyuan/tiny-slider#methods
      getSlider() {
        return slider;
      },
    });

    return () => h("div", { ref: root }, slots);
  },
};
</script>