<template>
  <ErrorMessage :name="name" as="div" class="text-red-500 text-xs italic" />
</template>
<script setup lang="ts">
import { ErrorMessage } from 'vee-validate'
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
<style lang=""></style>
