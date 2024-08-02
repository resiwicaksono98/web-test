import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import Vue3Lottie from 'vue3-lottie'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import fastDeepEqual from 'fast-deep-equal'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastPlugin)
app.use(Vue3Lottie)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB2mgg1OzljCoZcmL8idOytjS09mhNZr-4',
    libraries: 'places'
  },
  fastDeepEqual
})

app.mount('#app')
