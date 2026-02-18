<template>
    <div class="con">
        <div :style="{backgroundColor:car.hex_color}">Kolor auta</div>
        <div :style="{backgroundColor: car.damaged ? 'red' : 'green'}">{{ car.damaged ? "uszkodzony" : "nieuszkodzony" }}</div>
        <img :src="car.image" >
        <div>id:{{ car.id }}</div>
        <div>name:{{ car.car_name }}</div>
        <div>year:{{ car.car_year }}</div>
        <button @click="info">INFO</button>
        <button @click="zmien">Zmień stan auta</button>
  </div>
</template>

<script>
    export default {
        props:{
            car: Object
        },
        methods:{
            info(){
              alert(JSON.stringify(this.car, null,5))

            },
            zmien(){
                    this.$store.commit("zmiana", this.car)
            }
        }
    }
</script>

<style scoped>
    .con{
        margin-left: 5px;
        width: 200px;
        border: 1px solid black;
        
    }
</style>