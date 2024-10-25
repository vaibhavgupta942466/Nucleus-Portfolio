import './assets/main.css'
import './assets/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router, cleanupRouter } from './router'

const app = createApp(App)

// Add cleanup on app unmount
app.unmount = () => {
  cleanupRouter()
}

app.use(createPinia())
app.use(router)

app.mount('#app')
