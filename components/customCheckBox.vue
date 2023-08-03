<script setup>
  defineProps(["text"]);
</script>
<template>
  <div class="flex gap-[10px] items-center justify-center">
    <input type="checkbox" name="" id="field" />
    <label for="field">{{ text }}</label>
  </div>
</template>
