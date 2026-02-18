<template>
    <div id="con">
        <div>Child</div>
        <h2>{{cInComp}}</h2>
        <button @click="addInComp">Dodaj</button>
        <button @click="removeInComp">usuń</button>
        <div class="flex">
            <div v-for="item in change" class="koło"></div>
        </div>
        <GrandChild></GrandChild>
        <GrandChild></GrandChild>
    </div>
</template>

<script>
import GrandChild from "./GrandChild.vue"
    export default {
        components:{GrandChild},
    computed: {
            cInComp() {
            return this.$store.state.c
        },
        change () {
            if(this.$store.state.c % 2 == 0){
                return this.$store.state.c /2
            }
            else{
                return Math.floor(this.$store.state.c /2)
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
    #con{
        border: 2px dotted red;
        padding: 10px;
    }
     .koło{
        background-color: blue;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
    }
</style>