<template>
  <p :class="paragraphClass">
    <slot></slot>
  </p>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})

const paragraphClass = computed(() => {
  switch (props.align) {
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    default:
      return 'text-left'
  }
})
</script>
<style lang=""></style>
