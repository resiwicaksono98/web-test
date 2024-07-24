import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

export function useGetUser() {
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)
  return computed(() => user.value)
}
