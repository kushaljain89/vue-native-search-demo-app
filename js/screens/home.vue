<template>
    <view class="container">
        <button :on-press="gotoSearch" title="Go to Search"/>
    </view>
</template>

<script>
    export default {
        name: 'home',
        props: {
          navigation: {
              type: Object
          }
        },
        components: {},
        data () {
            return {}
        },
        methods: {
            gotoSearch() {
                this.navigation.navigate('Search');
            }
        }
    }
</script>

<style scoped>
    .container {
        flex: 1;
        background-color: black;
        align-items: center;
        justify-content: center;
    }
</style>