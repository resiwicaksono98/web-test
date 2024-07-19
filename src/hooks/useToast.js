import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const $toast = useToast()
export const toastSuccess = (message) => {
  $toast.success(message, {
    duration: 2000,
    position: 'bottom-right'
  })
}

export const toastError = (message) => {
  $toast.error(message, {
    duration: 2000,
    position: 'bottom-right'
  })
}

export const toastWarning = (message) => {
  $toast.warning(message, {
    duration: 2000,
    position: 'bottom-right'
  })
}

export const toastInfo = (message) => {
  $toast.info(message, {
    duration: 2000,
    position: 'bottom-right'
  })
}

export const toastDefault = (message) => {
  $toast(message, {
    duration: 2000,
    position: 'bottom-right'
  })
}
