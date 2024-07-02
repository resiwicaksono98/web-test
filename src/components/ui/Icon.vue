<template>
  <Icon :icon="icon" class="h-5 w-5" />
</template>
<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>
<style lang=""></style>
