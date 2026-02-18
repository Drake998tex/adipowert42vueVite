<template>
 <div id="main">
  <select v-model="a">
    <option>1990</option>
    <option>2000</option>
  </select>
  <select v-model="b">
<option>#273314</option>
<option>#111114</option>
  </select>
  <select v-model="c">
    <option>Aucra</option>
    <option>ford</option>
  </select>
  <button @click="stworz">stworz auto</button>
  <button @click="org">Orginalne dane</button>
  <div id="con1">
  <div>zepsute</div>
  <Car v-for="car in cars" :Car="car"></Car>
</div>
  <div id="con2">
  <div>sprawne</div>
   <Car v-for="car in cars1" :Car="car">{{ car.car_name }} - {{ car.damaged }}</Car>
 </div>
 </div>
</template>

<script>
import Car from './components/Car.vue';

export default {
  components: {
    Car
  },
  mounted() {
    this.$store.dispatch("SAMPLE_ACTION");
  },
  computed: {
    cars() {
      return this.$store.getters.SAMPLE_GETTER.filter(element => element.damaged == true) 
    },
    cars1() {
      return this.$store.getters.SAMPLE_GETTER.filter(element => element.damaged == false) 
    }
  },
  methods: {
    stworz() {
      this.d++
      const NewCar = {
            "id": this.d,
            "car_name": this.c,
            "car_type": "Rodeo",
            "car_year": this.a,
            "hex_color": this.b,
            "damaged": true
        }
      this.$store.commit("zmiana1", NewCar)
    },
    org() {
      
    }
  },
 data() {
 return {
  a: 2000,
  b: '#111114',
  c: 'ford',
  d: 5
 };
 },
};
</script>

<style scoped>
#con1 {
 background-color:  red;
 display: flex;
 margin: 40px;
}
#con2 {
 background-color:  green;
 display: flex;

 margin: 40px;
}
</style>