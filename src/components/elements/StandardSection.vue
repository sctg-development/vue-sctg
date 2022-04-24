<template>
  <section :id="id">
    <div
      class="
        w-full
        mx-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        px-10
      "
    >
      <div class="py-1 border-b border-white px-1.5 border-opacity-10">
        <div class="-mx-4 flex">
          <div class="w-full px-4">
            <h2 class="mb-5 text-3xl font-bold text-white">
              {{ title }}
            </h2>
          </div>
        </div>
      </div>
      <slot />
    </div>
  </section>
</template>
<script>
export default {
    props:{
        id: String,
        title: String,
    },
}
</script>