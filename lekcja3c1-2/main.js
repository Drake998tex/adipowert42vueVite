import { createApp } from 'vue'

import App from './App02.vue' // aplikacja
import store from "./store/index02" // --- załączamy store z osobnego pliku ---

createApp(App).use(store).mount('#app')

