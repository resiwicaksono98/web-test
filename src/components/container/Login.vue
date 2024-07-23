<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <DialogPanel class="bg-white rounded-2xl relative">
    <AuthTemplate>
      <!-- Login -->
      <div class="w-full text-center" v-if="!isOtpStep">
        <div class="font-medium text-gray-darken mt-6 md:mt-8 text-base md:text-xl">
          Masuk / Daftar
        </div>
        <div class="font-medium text-gray-darken text-base text-center md:text-xl">
          Menggunakan Nomor HP
        </div>
        <Form @submit="loginHandle" :validation-schema="loginSchema">
          <InputPhoneID name="phone" placeholder="85728xxxxxx" class="mt-8 md:mt-11" />
          <Button type="submit" class="bg-primary-soft w-full rounded-xl" :disabled="isSubmitting"
            >Masuk / Daftar</Button
          >
        </Form>
        <div
          class="mt-4 flex items-center justify-center gap-2 border py-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100"
        >
          <Icon name="flat-color-icons:google" class="w-6 h-6" />
          <div class="text-xs font-normal">Masuk / Daftar dengan Google</div>
        </div>
      </div>
      <!-- Otp -->
      <div class="w-full text-center" v-else>
        <div class="font-medium text-gray-darken mt-6 md:mt-8 text-base md:text-xl">
          Masukkan Kode OTP
        </div>
        <div class="font-light text-gray-darken text-base text-center md:text-sm mt-4">
          Masukkan kode yang telah dikirimkan ke WhatsApp nomor 08** **** 5678
        </div>
        <Form @submit="otpHandle" class="mt-8">
          <InputOTP />
          <p class="text-gray-medium text-start ml-6 font-light text-sm mt-2">
            <span v-if="timeLeft > 0">Kirim ulang kode dalam {{ timeLeft }}</span>
            <span v-else class="underline cursor-pointer" @click="timeLeft = 60"
              >Kirim ulang kode</span
            >
          </p>
          <Button
            type="submit"
            class="bg-primary-soft w-full rounded-xl mt-6"
            :disabled="isSubmitting"
            >Submit</Button
          >
        </Form>
      </div>
      <!-- Register one -->
    </AuthTemplate>
    <div class="absolute top-4 right-4 cursor-pointer" @click="$emit('close')">
      <Icon name="mdi:close" class="w-6 h-6 text-gray-darken" />
    </div>
  </DialogPanel>
</template>
<script setup>
import { ref, watch } from 'vue'
import { DialogPanel } from '@headlessui/vue'
import Icon from '../ui/Icon.vue'
import InputPhoneID from '../ui/InputPhoneID.vue'
import InputOTP from '../ui/InputOTP.vue'
import Button from '../ui/Button.vue'
import AuthTemplate from '../templates/AuthTemplate.vue'
import { Form } from 'vee-validate'
import * as yup from 'yup'
import { checkPhoneNumberExist, requestAuthOtp } from '@/services/authService'
import { toastError, toastInfo } from '@/hooks/useToast'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const router = useRouter()
const isOtpStep = ref(false)
const timeLeft = ref(60)
const auth = useAuthStore()
const isSubmitting = ref(false)

const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .required('Nomor telepon diperlukan')
    .matches(/^8[0-9]+$/, 'Nomor telepon harus diawali dengan 8 dan hanya boleh berisi angka')
    .min(10, 'Nomor telepon harus terdiri dari minimal 10 digit')
    .max(12, 'Nomor telepon harus terdiri maksimal 12 digit')
})

async function loginHandle(values) {
  isSubmitting.value = true
  const phone = '0' + values.phone
  const res = await checkPhoneNumberExist(phone)
  if (res.data.value) {
    isSubmitting.value = false
    localStorage.setItem('isUserExist', res.data.value.data.isUserExists)
    localStorage.setItem('phone', phone)
    await authOtpHandler()
    isOtpStep.value = true
  }
  if (res.error.value) {
    isSubmitting.value = false
    toastError('Failed to check phone number')
  }
}

async function otpHandle(values) {
  const otp = [
    values['otp-0'],
    values['otp-1'],
    values['otp-2'],
    values['otp-3'],
    values['otp-4'],
    values['otp-5']
  ].join('')

  if (otp.length < 6) {
    toastError('Kode OTP harus terdiri dari 6 digit')
    return
  }
  const isUserExist = localStorage.getItem('isUserExist')
  if (isUserExist === 'true') {
    // Login
    const data = await auth.authByOtp({
      phoneNumber: localStorage.getItem('phone'),
      otpId: localStorage.getItem('otpId'),
      otp: otp
    })
    if (data.user_id) {
      isOtpStep.value = false
      emit('close')
      router.push('/')
    }
  } else {
    // Register here
  }
}

async function authOtpHandler() {
  const { data } = await requestAuthOtp(localStorage.getItem('phone'))
  if (data.value) {
    localStorage.setItem('otpId', data.value.data.id)
    toastInfo('Kode OTP telah dikirimkan ke WhatsApp')
  }
}

const startTimer = () => {
  const timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

startTimer()

watch(timeLeft, () => {
  if (timeLeft.value === 60) {
    authOtpHandler()
    startTimer()
  }
})
</script>
<style lang=""></style>
