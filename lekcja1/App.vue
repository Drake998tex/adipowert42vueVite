<template>
 <div id="main">
 {{ message }}
 <MyButton>abcd</MyButton>
 <button @click="klik">abcd</button>

 <select name="" id="" >
  <option value="123">abc</option>
  <option value="456">def</option>
  <option value="789">ghi</option>
 </select>
 </div>
</template>

<script>
export default {
 data() {
 return {
 message: 'Hello World',
 a:10
 };
 },
 methods:{
  klik(){
    alert(this.message)
  },
  pok(){
    console.log(this.a)
  }
 },

 components: { MyButton }
};


import MyButton from "./components/MyButton.vue";
</script>

<style>
#main {
 font-size: 18px;
 font-family: 'Roboto', sans-serif;
 color: blue;
}
</style>