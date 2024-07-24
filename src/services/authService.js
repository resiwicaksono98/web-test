import { useFetch } from '@/hooks/useFetch'

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

export const registerUser = async (userData) => {
  const { data, loading, error, fetchData } = useFetch('auth/register-user-manual', 'POST', userData)

  await fetchData()

  return { data, loading, error }
}

export const registerDemander = async (demanderData) => {
  const { data, loading, error, fetchData } = useFetch('auth/register-demander', 'POST', demanderData)

  await fetchData()

  return { data, loading, error }
}