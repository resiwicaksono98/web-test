import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@/hooks/useFetch'
import axios from 'axios'
import { config } from '@/utils/config'
import { toastError, toastSuccess } from '@/hooks/useToast'

export const useAuthStore = defineStore('auth', () => {
  const user = ref()
  const error = ref(null)
  const loading = ref(false)

  const authByOtp = async (credentials) => {
    axios.get(config.apiUrl + '/sanctum/csrf-cookie', {
      withCredentials: true
    })
    const {
      data,
      error: err,
      fetchData,
      loading: load
    } = await useFetch('auth/auth-by-otp', 'POST', {
      phoneNumber: credentials.phoneNumber,
      otpId: credentials.otpId,
      otp: credentials.otp
    })

    await fetchData()

    if (load.value) {
      loading.value = true
    }

    if (data.value) {
      await me()
      toastSuccess('Login successfully')
      localStorage.removeItem('isUserExist')
      localStorage.removeItem('otpId')
      localStorage.removeItem('phone')
      loading.value = false
      return data.value.data
    }
    if (err.value) {
      toastError(err.value.response.data.message)
      error.value = err.value.response.data.message
      loading.value = false
    }
  }

  const me = async () => {
    const { data, error: err, loading: load, fetchData } = useFetch('me', 'GET')

    await fetchData()

    if (load.value) {
      loading.value = true
    }

    if (data.value) {
      user.value = data.value.data
      loading.value = false
    }

    if (err.value) {
      error.value = err.value.response.data.message
      loading.value = false
    }
  }

  return { user, authByOtp, me }
})
