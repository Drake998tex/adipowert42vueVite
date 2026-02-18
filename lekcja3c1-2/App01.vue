<template>
    <div id="main">
        {{ message }}
     <p id="blue">{{ title }}</p>
    </div>
    <div v-for="product in products">
        {{ product.title }},
        {{product.price}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '01 Vuex: Getters',
            title: 'get local data from state by Getter'
        };
    },
    computed: {
        products() {
            return this.$store.getters.GET_PRODUCTS;
        }
    }


};
</script>

<style>
#main {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: rgb(255, 0, 0);
}
#blue {
    color: blue;
}
</style>