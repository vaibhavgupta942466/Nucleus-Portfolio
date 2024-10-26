import './assets/main.css'
import './assets/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router, cleanupRouter } from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

// Add cleanup on app unmount
app.unmount = () => {
  cleanupRouter()
}

// If want to add persistence (menu state survives page reloads),
// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import App from './App.vue'

// const app = createApp(App)
// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

// app.use(pinia)
// app.mount('#app')
