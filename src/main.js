import { createApp } from 'vue'
import App from './App.vue'
import stores from './stores'

const app = createApp(App)
app.use(stores)
app.mount('#app')
