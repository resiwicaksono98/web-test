<template>
  <div class="w-full flex justify-center space-x-2">
    <Field
      v-for="(digit, index) in otp"
      :key="index"
      v-model="otp[index]"
      :name="`otp-${index}`"
      @input="moveToNext($event, index)"
      @keydown.backspace="moveToPrev(index)"
      @keypress="isNumber($event)"
      maxlength="1"
      class="appearance-none border border-slate-300 rounded-lg w-12 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:border-none focus:ring-gray-darken text-center"
    />
  </div>
  <ErrorMessage :name="name" class="text-red-500 text-xs italic" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { ErrorMessage, Field } from 'vee-validate'

const name = ref('otp')
const otp = ref(Array(6).fill(''))

watch(otp, (newOtp) => {
  for (let i = 0; i < newOtp.length; i++) {
    if (newOtp[i] === undefined) {
      otp.value[i] = ''
    }
  }
})

const moveToNext = (event, index) => {
  if (event.target.value.length === 1 && index < otp.value.length - 1) {
    document.querySelectorAll('input')[index + 1].focus()
  }
}

const moveToPrev = (index) => {
  if (otp.value[index] === '' && index > 0) {
    document.querySelectorAll('input')[index - 1].focus()
  }
}

const isNumber = (event) => {
  const charCode = event.which ? event.which : event.keyCode
  if (charCode < 48 || charCode > 57) {
    event.preventDefault()
  }
}
</script>

<style scoped></style>
