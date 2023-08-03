<script setup>
defineProps(["text", "textSize"]);
</script>
<template>
  <button
    type="submit"
    class="group relative h-full w-full py-[5px] px-[30px] overflow-hidden rounded-lg bg-black dark:bg-white shadow"
  >
    <div
      class="absolute inset-0 w-0 bg-green-600 transition-all duration-[250ms] ease-out group-hover:w-full"
    ></div>
    <span class="relative text-black text-[18px] group-hover:text-white">{{
      text
    }}</span>
  </button>
</template>
