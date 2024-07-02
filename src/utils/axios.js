import axios from 'axios'
import { config } from './config'
import { useCookies } from 'vue3-cookies'

const instance = axios.create({
  baseURL: config.apiUrl,
  timeout: config.timeout,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

const { cookies } = useCookies()

instance.interceptors.request.use(async (config) => {
  try {
    const xsrfToken = cookies.get('XSRF-TOKEN')

    if (xsrfToken) {
      config.headers['X-XSRF-TOKEN'] = xsrfToken
    }
    config.headers['stack-version'] = import.meta.env.VITE_API_STACK_VERSION
    return config
  } catch (error) {
    return Promise.reject(error)
  }
})

export default instance
