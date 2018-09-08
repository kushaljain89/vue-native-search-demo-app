<template>
    <view class="container">
        <status-bar bar-style="light-content"/>
        <app-navigation/>
    </view>
</template>

<script>
    import {AppNavigation} from "./routes";

    export default {
        name: 'Main',
        components: {AppNavigation},
        created () {
            this.$store.dispatch('fetchRecentsFromLocal')
        }
    }
</script>

<style>
    .container {
        background-color: black;
        flex: 1;
        justify-content: space-between;
    }
</style>
