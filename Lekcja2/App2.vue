<template>
    <div>
        <button @click="add">dodaj</button>
        <button @click="remove">usuń</button>
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

</style>