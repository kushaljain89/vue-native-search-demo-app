<template>
    <main/>
</template>

<script>
    import Vue from "vue-native-core"
    import {VueNativeBase} from "native-base"
    import store from './js/store/index.js'
    import Main from './js/Main'

    Vue.use(VueNativeBase)

    export default {
        name: "App",
        components: {Main},
        store
    }
</script>

<style scoped>

</style>