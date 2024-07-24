import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', () => {
  const isLoading = ref(true)

  function startLoading() {
    isLoading.value = true
  }

  function stopLoading() {
    isLoading.value = false
  }

  return { isLoading, startLoading, stopLoading }
})
