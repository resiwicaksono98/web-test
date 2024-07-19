<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Icon :icon="name" class="h-5 w-5" />
</template>
<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
<style lang=""></style>
