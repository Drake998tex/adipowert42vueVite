<template>
     
                <div class="box" >
                <div :style="{backgroundColor: car.hex_color}">Kolor:auta</div>
                <div :style="{ backgroundColor:  car.damaged  ? 'red' : 'green' }">{{ car.damaged  ? "uszkodzony" : "Sprawny" }}</div>
                <img :src="car.image" width=100>
                <div>id:{{ car.id }}</div>
                <div>name:{{ car.car_name }}</div>
                <button @click="klik()">info</button>

            </div>
            
    
</template>

<script>
    export default {
        props:{
            car: Object // {type: Object}
        },
        methods:{
            klik(){
                alert(JSON.stringify(this.car, null,5))
                
            }
        }
    }
</script>

<style  scoped>
 .box{
        width: 110px;
        height: 300px;
        border: 1px solid black;
        margin-left: 10px
    }
   
</style>






