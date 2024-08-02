<template>
  <Field :name="name" v-slot="{ field }">
    <Multiselect
      v-bind="field"
      v-model="field.value"
      :options="options"
      :searchable="true"
      :close-on-select="true"
      :show-labels="false"
      :placeholder="placeholder"
      :label="selectLabel"
      :trackBy="selectValue"
      :caret="false"
      @select="updateValue"
      :class="newClass"
      class="rounded-md placeholder:text-sm focus:outline-primary"
      :disabled="disabled"
    >
      <template v-slot:caret>
        <div class="multiselect__select">
          <div class="flex justify-center items-center">
            <Icon name="mingcute:down-line" class="h-8 w-8" />
          </div>
        </div>
      </template>
    </Multiselect>
  </Field>
  <ErrorMessage :name="name" />
</template>
<script setup>
import Multiselect from 'vue-multiselect'
import { Field } from 'vee-validate'
import Icon from './Icon.vue'
import ErrorMessage from './ErrorMessage.vue'
const emit = defineEmits(['update-value'])

defineProps({
  options: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  selectLabel: {
    type: String,
    required: false
  },
  selectValue: {
    type: String,
    required: false
  },
  newClass: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    required: false
  }
})
function updateValue(newValue) {
  emit('update-value', newValue)
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style>
.multiselect__select:before {
  display: none;
  border: 1px solid red;
}
.multiselect__single {
  padding: 4px 6px;
}

.multiselect .multiselect__option--highlight {
  background-color: #f1f5f9;
  color: black;
}

.multiselect .multiselect__option--selected {
  background-color: #3a025b;
  color: white;
}
</style>
