<template>
    <div>
<div :style="{backgroundColor: Car.hex_color}">kolor auta</div>
<div>Id: {{ Car.id }}</div>
<div>name: {{ Car.car_name }}</div>
<div>year: {{ Car.car_year }}</div>
<button @click="info">INFO</button>
<button @click="zmiana">{{ Car.damaged ? "Napraw" : "Zepsuj" }}</button>
<div></div>
    </div>
</template>

<script>
    export default {
        props: {Car: Object},
        methods: {
            info() {
                alert(JSON.stringify(this.Car, null, 5))
            },
            zmiana() {
               this.$store.commit("zmiana", this.Car)
            }
        }
    }
</script>

<style scoped>

</style>