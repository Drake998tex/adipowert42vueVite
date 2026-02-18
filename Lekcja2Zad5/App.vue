<template>
  <div>
    <div class="flex">
      <CarStan  v-for="car in change" :car="car"></CarStan>
    </div>
    <div>komponenty aut:</div><br>
    <div class="flex">
        <Car v-for="car in change" :car="car"></Car>
    </div>
    
  </div>
</template>

<script>
import Car from "./components/Car.vue"
import CarStan from "./components/CarStan.vue"
  export default {
    components:{Car,CarStan},
    computed:{
      change(){
        return this.$store.state.json
      }
    }
  }
</script>

<style scoped>
  .flex{
    display: flex;
    
  }
</style>