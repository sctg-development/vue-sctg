<template>
  <div class="w-full px-4 md:w-1/2 xl:w-1/3 2xl:w-1/4">
    <div
      class="
        bg-slate-600
        hover:bg-gradient-to-r
        hover:from-yellow-400
        hover:via-pink-600
        hover:to-indigo-500
        mb-5
        rounded-lg
        p-[2px]
      "
    >
      <div class="flex items-center rounded-lg bg-slate-700 p-6">
        <div
          class="mr-5 h-[70px] w-full max-w-[70px] overflow-hidden rounded-lg"
        >
          <img
            :src="imgurl"
            :alt="title"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="w-full">
          <h3
            class="
              overflow-hidden
              text-ellipsis
              hitespace-nowrap
              text-lg
              font-semibold
              text-white
            "
          >
            {{title}}
          </h3>
          <span class="text-base font-semibold text-emerald-700">
            {{subtitle}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    subtitle: String,
    imgurl: String,
  },
  setup() {},
  data() {
    return {};
  },
};
</script>