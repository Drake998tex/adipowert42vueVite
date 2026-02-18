<template>
    <select name="sel1" id="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
</template>

<script>
export default {
    data() {
        return {
            title: "select title",
            Array: [1, 2, 3]
        };
    },
    methods: {

    },
};
</script>

<style scoped>
.b {
    font-size: 30px;
}
</style>