<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full">
    <Field
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:border-none focus:ring-gray-darken"
    />
    <ErrorMessage :name="name" class="text-red-500 text-xs italic" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { Field, ErrorMessage, useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  rules: {
    type: String,
    default: 'required'
  }
})
</script>

<style scoped></style>
