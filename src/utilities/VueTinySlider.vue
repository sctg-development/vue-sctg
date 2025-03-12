<script>
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