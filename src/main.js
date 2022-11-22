import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './assets/main.css'
import API from './api'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap/dist/js/bootstrap.js'
const app = createApp(App)

export const api = new API()

app.use(router)

app.use(Toast)

app.mount('#app')
