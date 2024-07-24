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
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Icon name="mdi:calendar-range-outline" class="h-6 w-6 text-primary" />
        </div>
      </div>
      <ErrorMessage :name="name" class="text-red-500 text-xs italic" />
    </Field>
  </template>
  
  <script setup lang="ts">
  import VueDatePicker from "@vuepic/vue-datepicker";
  import "@vuepic/vue-datepicker/dist/main.css";
  import { Field } from "vee-validate";
  import Icon from '../ui/Icon.vue';
  import ErrorMessage from '../ui/ErrorMessage.vue';
  const emit = defineEmits(["update-value"]);
  
  const props = defineProps({
    format: {
      type: String,
      required: false,
      default: "MM/dd/yyyy",
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    newClass: {
      type: String,
      required: false,
    },
  });
  
  function updateValue(newValue: string) {
    emit("update-value", newValue);
  }
  </script>
  
  <style scoped>
  .dp__input {
    padding: 8px 40px;
    border: none; 
  }
  </style>
  