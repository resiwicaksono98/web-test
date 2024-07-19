<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mb-4">
    <div class="w-full flex">
      <div class="flex items-center px-3 border rounded-l-xl border-r-0 text-gray-light">+62</div>
      <Field
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="appearance-none border rounded-l-none rounded-r-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-"
      />
    </div>
    <ErrorMessage :name="name" class="text-red-500 text-xs italic flex text-start mt-1" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
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
