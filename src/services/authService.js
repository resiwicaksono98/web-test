import { useFetch } from '@/hooks/useFetch'
import { toastError, toastSuccess } from '@/hooks/useToast'
import { auth, provider, signInWithPopup } from '@/utils/firebase'

export const checkPhoneNumberExist = async (phoneNumber) => {
  const { data, loading, error, fetchData } = useFetch('auth/check-phone-exists', 'POST', {
    phoneNumber,
    checkAs: 'demander'
  })

  await fetchData()

  return { data, loading, error }
}

export const requestAuthOtp = async (phoneNumber) => {
  const { data, loading, error, fetchData } = useFetch('auth/request-otp', 'POST', {
    phoneNumber,
    type: 'auth'
  })

  await fetchData()

  return { data, loading, error }
}

export const resendOtp = async (otpId) => {
  const { data, loading, error, fetchData } = useFetch('otp/resend', 'POST', {
    otpId
  })

  await fetchData()

  return { data, loading, error }
}

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider)
    const firebaseToken = result.user?.accessToken
    const { data } = await firebaseAuth(firebaseToken)
    if (data.value) {
      localStorage.setItem('demanderCreated', data.value.data.isDemanderCreated)
      if (data.value.data.isDemanderCreated) {
        toastSuccess('Login successfully')
        return true
      } else {
        localStorage.setItem('registerByGoogle', true)
        return false
      }
    }
  } catch (error) {
    console.error('Error saat login dengan Google:', error)
    toastError('Gagal login dengan Google')
  }
}

async function firebaseAuth(firebaseToken) {
  const { data, loading, error, fetchData } = useFetch('auth/firebase-login', 'POST', {
    firebaseToken
  })

  await fetchData()

  return { data, loading, error }
}

export const registerUser = async (userData) => {
  const { data, loading, error, fetchData } = useFetch('auth/register-user', 'POST', userData)

  await fetchData()

  return { data, loading, error }
}

export const registerDemander = async (demanderData) => {
  const { data, loading, error, fetchData } = useFetch(
    'auth/register-demander',
    'POST',
    demanderData
  )

  await fetchData()

  return { data, loading, error }
}
