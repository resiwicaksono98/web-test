<template>
    <DialogPanel class="bg-white rounded-2xl relative">
      <AuthTemplate>
        <!-- Login -->
        <div class="w-full text-center" v-if="!isOtpStep && !isRegisterStep">
          <div class="font-medium text-gray-darken mt-6 md:mt-8 text-base md:text-xl">
            Masuk / Daftar
          </div>
          <div class="font-medium text-gray-darken text-base text-center md:text-xl">
            Menggunakan Nomor HP
          </div>
          <Form @submit="loginHandle" :validation-schema="loginSchema">
            <InputPhoneID name="phone" placeholder="85728xxxxxx" class="mt-8 md:mt-11" />
            <Button type="submit" class="bg-primary-soft w-full rounded-xl" :disabled="isSubmitting">
              Masuk / Daftar
            </Button>
          </Form>
          <div class="mt-4 flex items-center justify-center gap-2 border py-2 px-4 rounded-xl cursor-pointer hover:bg-gray-100">
            <Icon name="flat-color-icons:google" class="w-6 h-6" />
            <div class="text-xs font-normal">Masuk / Daftar dengan Google</div>
          </div>
        </div>
        <!-- Otp -->
        <div class="w-full text-center" v-if="isOtpStep && !isRegisterStep">
          <div class="font-medium text-gray-darken mt-6 md:mt-8 text-base md:text-xl">
            Masukkan Kode OTP
          </div>
          <div class="font-light text-gray-darken text-base text-center md:text-sm mt-4">
            Masukkan kode yang telah dikirimkan ke WhatsApp nomor 08** **** 5678
          </div>
          <Form @submit="otpHandle" class="mt-8">
            <InputOTP />
            <p class="text-gray-medium text-start ml-6 font-light text-sm mt-2">
              <span v-if="timeLeft > 0">Kirim ulang kode dalam {{ timeLeft }} detik</span>
              <span v-else class="underline cursor-pointer" @click="startTimer">
                Kirim ulang kode
              </span>
            </p>
            <Button type="submit" class="bg-primary-soft w-full rounded-xl mt-6" :disabled="isSubmitting">
              Submit
            </Button>
          </Form>
        </div>
        <!-- Register -->
        <div class="w-full" v-if="isRegisterStep">
          <Heading class="font-bold mt-6 md:mt-8 text-base md:text-3xl">
            DAFTAR
          </Heading>
          <Paragraph class="font-light text-base md:text-sm mt-4">
            Lengkapi profile perusahaanmu dan bersiap menemukan pekerja sesuai kebutuhan bisnismu!
          </Paragraph>
          <Form @submit="registerHandle" :validation-schema="currentSchema" class="mt-6">
            <!--Step 1-->
            <div v-if="currentStep === 1">
              <div class="mt-4">
                <Label for="fullName">Nama Lengkap</Label>
                <Input id="fullName" name="fullName" placeholder="Masukan nama lengkap" />
              </div>
              <div class="mt-4">
                <Label for="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Masukan alamat Email" />
              </div>
              <div class="mt-4">
                <Label>Jenis Kelamin</Label>
                <RadioButton :options="genderOptions" v-model="gender" />
              </div>
              <div class="mt-4">
                <Label for="dateOfBirth">Tanggal Lahir</Label>
                <DatePicker id="dateOfBirth" name="dateOfBirth" placeholder="Masukan tanggal lahir" v-model="dateOfBirth"/>
              </div>
              <Button type="submit" class="w-full rounded-xl mt-6" :disabled="isSubmitting">
                Selanjutnya
              </Button>
            </div>
            <!--Step 2-->
            <div v-if="currentStep === 2">
              <div class="mt-4">
                <Label for="companyName">Nama Perusahaan</Label>
                <Input id="companyName" name="companyName" placeholder="Masukan nama perusahaan" />
              </div>
              <div class="mt-4">
                <Label for="locationName">Alamat Perusahaan</Label>
                <Input id="locationName" name="locationName" placeholder="Masukan alamat perusahaan" />
              </div>
              <div class="mt-4 relative">
                <Label for="referenceNumber">Kode Referal</Label>
                <div class="flex items-center">
                  <Input
                    id="referenceNumber"
                    name="referenceNumber"
                    placeholder="Masukan kode referal"
                    class="flex-grow"
                    v-model="referral"
                    @input="validateReferral"
                  />
                  <button type="button" class="mb-4 p-2 bg-green text-white rounded-r-lg" @click="submitReferral">
                    <Icon name="mdi:arrow-right" class="w-6 h-6" />
                  </button>
                </div>
                <span v-if="referralError" class="text-red-500 text-sm mt-1">Kode referal tidak valid</span>
              </div>
              <Button type="submit" class="w-full rounded-xl mt-6" :disabled="isSubmitting">
                Simpan
              </Button>
            </div>
          </Form>
        </div>
      </AuthTemplate>
      <div class="absolute top-4 right-4 cursor-pointer" @click="$emit('close')">
        <Icon name="mdi:close" class="w-6 h-6 text-gray-darken" />
      </div>
    </DialogPanel>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { format } from 'date-fns' 
  import { DialogPanel } from '@headlessui/vue'
  import Icon from '../ui/Icon.vue'
  import Heading from '../ui/Heading.vue'
  import InputPhoneID from '../ui/InputPhoneID.vue'
  import InputOTP from '../ui/InputOTP.vue'
  import Input from '../ui/Input.vue'
  import Label from '../ui/Label.vue'
  import DatePicker from '../ui/DatePicker.vue'
  import RadioButton from '../ui/RadioButton.vue'
  import Paragraph from '../ui/Paragraph.vue'
  import Button from '../ui/Button.vue'
  import AuthTemplate from '../templates/AuthTemplate.vue'
  import { Form } from 'vee-validate'
  import * as yup from 'yup'
  import { checkPhoneNumberExist, requestAuthOtp, registerUser, registerDemander } from '@/services/authService'
  import { toastError, toastInfo } from '@/hooks/useToast'
  import { useAuthStore } from '@/stores/authStore'
  import { useRouter } from 'vue-router'
  
  const emit = defineEmits(['close'])
  const router = useRouter()
  const isOtpStep = ref(false)
  const isRegisterStep = ref(false)
  const currentStep = ref(1)
  const timeLeft = ref(60)
  const auth = useAuthStore()
  const isSubmitting = ref(false)
  const gender = ref('male')
  const dateOfBirth = ref(null)
  const referral = ref('')
  const referralError = ref(false)
  
  const loginSchema = yup.object().shape({
    phone: yup
      .string()
      .required('Nomor telepon diperlukan')
      .matches(/^8[0-9]+$/, 'Nomor telepon harus diawali dengan 8 dan hanya boleh berisi angka')
      .min(10, 'Nomor telepon harus terdiri dari minimal 10 digit')
      .max(12, 'Nomor telepon harus terdiri maksimal 12 digit')
  })
  
  const otpSchema = yup.object().shape({
    otp: yup.string().length(6, 'Kode OTP harus terdiri dari 6 digit').required('Kode OTP diperlukan')
  })
  
  const firstStepSchema = yup.object().shape({
    fullName: yup.string().required('Nama lengkap diperlukan'),
    email: yup
      .string()
      .required('Email harus diisi')
      .email('Format email tidak valid'),
    dateOfBirth: yup.date().required('Tanggal lahir diperlukan')
  })
  
  const secondStepSchema = yup.object().shape({
    companyName: yup.string().required('Nama perusahaan diperlukan'),
    locationName: yup.string().required('Alamat perusahaan diperlukan'),
    referral: yup.string().optional()
  })
  
  const currentSchema = ref(firstStepSchema)
  const genderOptions = [
    { label: 'Laki - Laki', value: 'male' },
    { label: 'Perempuan', value: 'female' }
  ]
  
  watch(currentStep, (newStep) => {
    if (newStep === 1) {
      currentSchema.value = firstStepSchema
    } else if (newStep === 2) {
      currentSchema.value = secondStepSchema
    }
  })
  
  async function loginHandle(values) {
    isSubmitting.value = true
    const phone = '0' + values.phone
    try {
      const res = await checkPhoneNumberExist(phone)
      if (res.data.value) {
        localStorage.setItem('isUserExist', res.data.value.data.isUserExists)
        localStorage.setItem('phone', phone)
        isOtpStep.value = true
        await requestAuthOtp(phone)
      } else {
        throw new Error('Phone number validation failed')
      }
    } catch (error) {
      toastError(error.message || 'Gagal memproses nomor telepon')
    }
    isSubmitting.value = false
  }
  
  async function otpHandle(values) {
    isSubmitting.value = true
    try {
      isRegisterStep.value = true
    } catch (error) {
      toastError(error.message || 'Error during OTP validation')
    }
    isSubmitting.value = false
  }
  
  async function registerHandle(values) {
    isSubmitting.value = true
    if (currentStep.value === 1) {
      const formattedDateOfBirth = dateOfBirth.value ? format(dateOfBirth.value, 'yyyy-MM-dd') : null
  
      const userData = {
        phone: localStorage.getItem('phone'),
        fullName: values.fullName,
        email: values.email,
        gender: gender.value,
        dateOfBirth: formattedDateOfBirth
      }
  
      try {
        const userResponse = await registerUser(userData)
        if (userResponse) {
            toastInfo('Registration successful!')
        }
        currentStep.value = 2
      } catch (error) {
        toastError(error.message || 'Error during registration')
      }
    } else if (currentStep.value === 2) {
      const demanderData = {
        phone: localStorage.getItem('phone'),
        companyName: values.companyName,
        locationName: values.locationName,
        referenceNumber: values.referenceNumber
      }
  
      try {
        const demanderResponse = await registerDemander(demanderData)
        if (demanderResponse) {
            toastInfo('Registration successful!')
        }
        toastInfo('Registration successful!')
        emit('close')
        router.push('/')
      } catch (error) {
        toastError(error.message || 'Error during registration')
      }
    }
    isSubmitting.value = false
  }
  
  function startTimer() {
    timeLeft.value = 60
    const timer = setInterval(() => {
      timeLeft.value -= 1
      if (timeLeft.value <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  }
  
  function validateReferral() {
    referralError.value = !referral.value.match(/^[0-9]{5,10}$/)
  }
  
  function submitReferral() {
    if (!referralError.value) {
      console.log('Submitting referral:', referral.value)
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  