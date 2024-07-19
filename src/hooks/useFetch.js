import { ref } from 'vue'
import instance from '@/utils/axios'

export function useFetch(url, method = 'GET', payload = null) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchData = async () => {
    loading.value = true
    try {
      let response
      const config = {
        headers: {
          'Content-Type': payload instanceof FormData ? 'multipart/form-data' : 'application/json'
        }
      }
      switch (method.toUpperCase()) {
        case 'POST':
          response = await instance.post(url, payload, config)
          break
        case 'PUT':
          response = await instance.put(url, payload)
          break
        case 'DELETE':
          response = await instance.delete(url)
          break
        case 'GET':
        default:
          response = await instance.get(url)
          break
      }
      data.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetchData
  }
}
