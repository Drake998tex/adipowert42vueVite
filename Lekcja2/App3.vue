<template>
    <div>
        <button @click="add">dodaj</button>
        <button @click="remove">usuń</button>
        <div>{{ count }}</div>
        <div class="flex">
            <div v-for="item in count" class="koło"></div>
        </div>
        <Child></Child>
        <Child></Child>
    </div>
</template>

<script>
import Child from "./components/Child.vue";

    export default {
        components:{Child},
        methods:{
            add () {
            this.$store.commit("plus")
            console.log(this.$store.state.c)
            },

            remove(){
                this.$store.commit("minus")
            console.log(this.$store.state.c)
            }

        },
        computed: {
            count() {
            return this.$store.state.c
            },

            
        }
    }
</script>

<style scoped>
    .koło{
        background-color: red;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
    }
</style>