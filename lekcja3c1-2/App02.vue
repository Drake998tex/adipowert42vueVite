<template>
<div>
    <h1  style="color: red;">{{ tittle }}</h1>
    <br>
    <h2 style="color: blue;">{{ header }}</h2>
</div>
<div> 
    <div class="box" v-for="post in posts">
      title:   {{ post.title }}
      content: {{ post.body }}
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("GET_POSTS_ACTION");
    },
    data() {
        return {
          header: "axios library - get external json data ()",
          tittle: "02 Vuex: Actions, Mutations"
        };
    },
    computed: {
        posts() {
            return this.$store.getters.GET_POSTS;
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
.box {
    background-color: lightgrey;
    color: black;
    padding: 5px;
    margin: 5px;
}
</style>