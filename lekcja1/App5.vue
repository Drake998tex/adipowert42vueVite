<template>
    <input type="range" v-model="a" min="1909" max="2013">
    <div class="con">
         <MyCar v-for="car in sortowane" :car="car"></MyCar> 
         
    </div>
    
    
</template>

<script>
    import JsonData from "./data/cars_full.json";
    import MyCar from "./components/MyCar.vue"

    export default {

        data(){
            return{
                json: JsonData,   
                a:2013
            }
        },

        components:{MyCar},

        methods:{
           
            
        },
        computed:{
           sortowane(){
                return this.json.filter(x => x.car_year == this.a)
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

