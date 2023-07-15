<script setup>
  defineProps(["title", "iconName", "type"]);
</script>
<template>
  <div class="flex flex-col gap-y-[10px]">
    <h2>{{ title }}</h2>
    <div class="flex">
      <span
        class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
      >
        <font-awesome-icon :icon="iconName" />
      </span>
      <input
        :type="type"
        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="type"
      />
    </div>
  </div>
</template>
