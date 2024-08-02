<template>
  <div class="flex gap-4 mb-4">
    <Field :name="name" type="checkbox" @change="updateValue" v-model="value" :value="input" />
    <div class="text-[#564E4E]">
      {{ label }}
    </div>
  </div>
  <ErrorMessage class="text-red" :name="name" />
</template>
<script setup>
import { ref, watch } from 'vue'
import { Field } from 'vee-validate'
import ErrorMessage from './ErrorMessage.vue'
const emit = defineEmits(['update-value'])
const value = ref(false)
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  input: {
    type: Boolean,
    default: false
  }
})

function updateValue() {
  emit('update-value', value.value)
}
</script>
<style lang="scss">
input[type='checkbox'] {
  height: 24px;
  width: 24px;
  accent-color: #6cd99b;
}
</style>
