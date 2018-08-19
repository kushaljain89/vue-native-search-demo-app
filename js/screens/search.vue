<template>
    <view class="container">
        <text :style="{color: 'white'}">Search Screen</text>
    </view>
</template>

<script>
    export default {
        name: "search",
        components: {},
        props: {
            navigation: {
                type: Object
            }
        },
        data () {
            return {}
        },
        mounted () {},
        computed: {},
        methods: {}
    }
</script>

<style scoped>
    .container {
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: black;
    }
</style>