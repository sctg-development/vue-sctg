<template>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              class="
                mb-10
                rounded-xl
                border border-slate-600
                bg-slate-700
                p-6
                ease-in-out
                duration-150
                hover:border-white hover:bg-white
              "
            >
              <div
                class="
                  mb-5
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFF0E9]
                "
              >
              <img class="w-[34px] h-[34px]" :src="imageUrl"/>
              </div>
              <h3
                class="
                  mb-2
                  text-xl
                  font-medium
                  text-white
                  transition-all
                  ease-in-out
                  duration-150
                  group-hover:text-zinc-900
                "
              >
                {{title}}
              </h3>
              <p class="text-base font-medium text-zinc-400">
                {{text}}
              </p>
            </div>
          </div>
</template>
<script>
export default {
    props: {
        title: String,
        text: String,
        imageUrl: String,
    },
    setup() {
        
    },
}
</script>