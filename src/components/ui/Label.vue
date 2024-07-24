<template>
  <label :for="name" class="text-base font-medium">
    <slot />
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String
})
</script>

<style scoped></style>
