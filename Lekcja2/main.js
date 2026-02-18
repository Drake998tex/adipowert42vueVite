//import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({

    state: {
        c: 0
    },

    mutations: {
        plus(state) {
            this.state.c++
        },
        minus(state){
           if(this.state.c > 0){
                this.state.c--
           } 
           else{
                alert("nie możne niżej niż 0")
           }
        }
    }

})
createApp(App).use(store).mount('#app')
import App from './App3.vue'


