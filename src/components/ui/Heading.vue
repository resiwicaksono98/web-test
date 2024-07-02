<template>
  <component :is="tag" :class="headingClass">
    <slot></slot>
  </component>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  level: {
    type: Number,
    default: 1,
    validator: (value) => [1, 2, 3, 4, 5, 6].includes(value)
  },
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})

const tag = computed(() => `h${props.level}`)
const headingClass = computed(() => {
  let baseClass = 'font-bold'
  switch (props.level) {
    case 1:
      baseClass += ' text-4xl'
      break
    case 2:
      baseClass += ' text-3xl'
      break
    case 3:
      baseClass += ' text-2xl'
      break
    case 4:
      baseClass += ' text-xl'
      break
    case 5:
      baseClass += ' text-lg'
      break
    case 6:
      baseClass += ' text-base'
      break
  }
  switch (props.align) {
    case 'center':
      baseClass += ' text-center'
      break
    case 'right':
      baseClass += ' text-right'
      break
    default:
      baseClass += ' text-left'
      break
  }
  return baseClass
})
</script>
<style lang=""></style>
