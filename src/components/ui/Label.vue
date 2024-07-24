<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <label :for="name" class="text-sm md:text-xl font-medium">
    {{ name }}
  </label>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* Tambahkan gaya khusus untuk label di sini jika diperlukan */
</style>
