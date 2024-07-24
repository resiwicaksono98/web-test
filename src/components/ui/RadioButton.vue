<template>
    <div class="flex items-center gap-4">
      <div v-for="option in options" :key="option.value" class="flex items-center">
        <input
          type="radio"
          :id="option.value"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="updateValue(option.value)"
          class="hidden peer"
        />
        <label
          :for="option.value"
          class="flex items-center cursor-pointer text-lg"
        >
          <div
            class="w-5 h-5 border-2 border-primary peer-checked:bg-primary peer-checked:border-transparent rounded-full mr-2 flex items-center justify-center"
          >
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
          {{ option.label }}
        </label>
      </div>
    </div>
  </template>
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const updateValue = (newValue) => {
    emit('update:modelValue', event.target.value);
  };
  </script>
  <style scoped>
  input[type="radio"]:checked + label div {
  background-color: white; 
  }
  input[type="radio"]:checked + label div div {
  background-color: #5F2B8C; /* White inner circle when checked */
  }
  
  </style>
  