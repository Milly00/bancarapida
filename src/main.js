import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import API from './api'

import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap/dist/js/bootstrap.js'
const app = createApp(App)

export const api = new API()

app.use(router)

app.mount('#app')
