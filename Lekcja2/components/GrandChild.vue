<template>
    <div id="com">
        <div>GrandChild</div>
        <h2>{{cInComp}}</h2>
        <button @click="addInComp">Dodaj</button>
        <button @click="removeInComp">usuń</button>
          <div class="flex">
            <div v-for="item in change" class="koło"></div>
        </div>
   </div>
</template>

<script>
    export default {
        
    computed: {
            cInComp() {
            return this.$store.state.c
        },
        change () {
            if(this.$store.state.c % 4 == 0){
                return this.$store.state.c /4
            }
            else{
                return Math.floor(this.$store.state.c /4)
            }
        
}
    },
        methods:{
            
                addInComp () {
                    this.$store.commit("plus")
                },
                removeInComp(){
                     this.$store.commit("minus")

                }

        }
    
}
    
</script>

<style scoped>


#com{
        border: 2px dotted blue;
        padding: 10px;
    }
      .koło{
        background-color: aqua;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
    }
</style>