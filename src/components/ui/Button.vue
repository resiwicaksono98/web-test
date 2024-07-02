<template>
  <button :class="`bg-${type} text-white px-4 py-2 rounded-md`">
    <slot />
  </button>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary'
  }
})
</script>
<style lang=""></style>
