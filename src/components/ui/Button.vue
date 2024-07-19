<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    class="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md disabled:bg-slate-400"
  >
    <slot v-if="!loading" />
    <span v-else class="loader"></span>
  </button>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped>
.loader {
  width: 20px;
  height: 20px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
