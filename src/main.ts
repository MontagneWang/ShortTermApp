import './assets/normalize.css'

import { createApp } from 'vue'
import pinia from "./stores/store"
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
