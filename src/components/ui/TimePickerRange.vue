<template>
  <Field :name="name" v-slot="{ field }">
    <div class="relative">
      <VueDatePicker
        v-model="field.value"
        v-bind="field"
        @update:modelValue="updateValue"
        :format="format"
        :placeholder="placeholder"
        class="appearance-none rounded-md text-gray-700 leading-tight focus:ring-1 focus:border-none focus:ring-gray-darken"
        :class="newClass"
        :hide-input-icon="true"
        time-picker
        :min-time="{ hours: 1, minutes: 0 }"
        :max-time="{ hours: 24, minutes: 0 }"
        :range="{ disableTimeRangeValidation: true }"
      />
      <div class="absolute inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
        <Icon name="mdi:clock-outline" class="h-6 w-6 text-primary" />
      </div>
    </div>
  </Field>
  <ErrorMessage :name="name" />
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { Field } from 'vee-validate'
import Icon from './Icon.vue'
import ErrorMessage from './ErrorMessage.vue'
const emit = defineEmits(['update-value'])

const props = defineProps({
  format: {
    type: String,
    required: false,
    default: 'HH:mm'
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  newClass: {
    type: String,
    required: false
  }
})

function updateValue(newValue) {
  emit('update-value', newValue)
}
</script>

<style scoped>
.dp__input {
  padding: 8px 40px;
  border: none;
}
</style>
