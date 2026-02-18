<template>
    <div class="con">
                <div class="box" v-for="car in json">
                <div :style="{backgroundColor: car.hex_color}">Kolor:auta</div>
                <div :style="{ backgroundColor:  car.damaged  ? 'red' : 'green' }">{{ car.damaged  ? "uszkodzony" : "Sprawny" }}</div>
                <img :src="car.image" width=100>
                <div>id:{{ car.id }}</div>
                <div>name:{{ car.car_name }}</div>
            </div>
    </div>
</template>

<script>
    import JsonData from "./data/cars.json";

    export default {
        data(){
            return {
                json: JsonData,         
            }
        },
        methods:{
            
        }
    }

</script>

<style scoped>
    .box{
        
        width: 110px;
        height: 300px;
        border: 1px solid black;
        margin-left: 10px
    }
    .con{
        display: flex;
        flex-direction: row;
        
    }
   
</style>

