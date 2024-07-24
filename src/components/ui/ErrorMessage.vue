<template>
    <ErrorMessage
      :name="name"
      as="div"
      class="text-red-400 text-sm font-light"
    />
  </template>
  <script setup lang="ts">
  import { ErrorMessage } from 'vee-validate'
  defineProps({
      name: {
          type: String,
          required: true,
      }
  })
  </script>
  <style lang=""></style>
  