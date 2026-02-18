<template>
    <div class="con">
        <MyCar v-for="car in json" :car="car"></MyCar>
    </div>
    
</template>

<script>
    import JsonData from "./data/cars.json";
    import MyCar from "./components/MyCar.vue"

    export default {

        data(){
            return{
                json: JsonData,         
            }
        },

        components:{MyCar},

        methods:{
            
        }
    }

</script>

<style scoped>
   
   .con{
        display: flex;
        flex-direction: row;
        
    }
</style>

