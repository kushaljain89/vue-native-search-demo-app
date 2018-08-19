<template>
  <main/>
</template>

<script>
    import Vue from "vue-native-core"
    import store from './js/store/index.js'
    import Main from './js/Main'

    export default {
        name: "App",
        components: {Main},
        store
    }
</script>

<style scoped>

</style>