<script setup>
  // Left out for future reasoning.
  // const { content } = defineProps(['icon','title', 'text'])
  defineProps(['iconPath', 'title', 'text', 'altText']);
</script>

<template>
    <div
    class="flex flex-col justify-center items-center border-2 border-gray-500 p-[40px] rounded-[25px] text-white gap-y-[10px] sm:gap-y-[20px] max-w-[400px] rounded-[50px] ssm:px-[20px] px-[15px] py-[30px]">
      <!-- Draws image only if path is supplied -->
      <img v-if="iconPath" :src="iconPath" :alt="altText" class="sm:h-[150px] h-[100px]" />
      <h2 class="sm:text-[30px] text-[20px]">
        {{title}}
      </h2>
      <p class="ssm:text-[14px] text-[12px] md:text-[20px]">
        {{ text }}
      </p>
  </div>
</template>