<template>
    <div class="con">
         <MyCar v-for="car in damaged" :car="car"></MyCar> <!-- car in json.slice(0,a)  -->
    </div>
    <button @click="dodaj()">Pokaż więcej</button>
    
</template>

<script>
    import JsonData from "./data/cars_full.json";
    import MyCar from "./components/MyCar.vue"

    export default {

        data(){
            return{
                json: JsonData,   
                a:5      
            }
        },

        components:{MyCar},

        methods:{
            dodaj(){
                this.a += 5
            },
            
        },
        computed:{
             damaged(){
                
                return this.json.filter(car => car.damaged).slice(0,this.a)

        }
        }
       
    }

</script>

<style scoped>
   
   .con{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
    }
</style>

