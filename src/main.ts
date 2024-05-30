import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'element-plus/es/components/message/style/css'

import App from './App.vue'
import router from './router'
import '@/utils/auth'

const app = createApp(App)

/* 添加pinia持久化插件 */
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)

app.mount('#app')
