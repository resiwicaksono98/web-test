<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Field
    as="textarea"
    v-model="value"
    :name="name"
    :placeholder="placeholder"
    class="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:border-none focus:ring-gray-darken placeholder:text-sm"
    :class="`${height}`"
    @change="updateValue"
  />
  <ErrorMessage class="text-red" :name="name" />
</template>
<script setup>
import { Field } from 'vee-validate'
import { ref } from 'vue'
import ErrorMessage from './ErrorMessage.vue'
import { watch } from 'vue'
const emit = defineEmits(['update-value'])

function updateValue(newValue) {
  emit('update-value', newValue)
}

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String
  },
  height: {
    type: String
  },
  value: {
    type: String,
    default: ''
  }
})

const value = ref(props.value)

// Watcher untuk mengupdate value jika props.value berubah
watch(
  () => props.value,
  (newValue) => {
    value.value = newValue
  }
)
</script>
<style lang=""></style>
