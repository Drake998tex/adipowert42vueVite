import './assets/main.css'
import { createStore } from 'vuex'
import { createApp } from 'vue'
import App from './App.vue'
import jsonData from "./data/cars.json"

const store = createStore({

 state: {
    json:jsonData
 },

 mutations: {
        zmiana(state, it) {
            if(it.damaged == true){
                it.damaged = false
            }
            else{
                it.damaged = true
            }
        }
    }

})



createApp(App).use(store).mount('#app')
