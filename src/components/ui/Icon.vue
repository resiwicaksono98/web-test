<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Icon :icon="name" class="" />
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
