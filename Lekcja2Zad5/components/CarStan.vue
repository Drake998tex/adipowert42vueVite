<template>
    <div :style="{backgroundColor: car.damaged ? 'red' : 'green'}" class="x">
        <div>{{ car.damaged ? "BAD" : "OK" }}</div>
        <button @click="zmien">zmień stan auta</button>
    </div>
</template>

<script>
    export default {
        props:{
            car: Object
        },
        methods:{
            zmien(){
                this.$store.commit("zmiana", this.car)
            }
        }
    }
</script>

<style  scoped>
    .x{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 200px;
        margin-left: 5px;
       
    }
</style>