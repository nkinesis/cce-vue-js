import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

var app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(router).mount('#app')