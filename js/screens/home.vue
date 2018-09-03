<template>
    <view class="container">
        <popular-search-listing :search="gotoSearch.bind(this)"></popular-search-listing>
        <recent-search-listing :search="gotoSearch.bind(this)"></recent-search-listing>
    </view>
</template>

<script>
    import PopularSearchListing from '../components/popularSearchListing'
    import RecentSearchListing from '../components/recentSearchListing'

    export default {
        name: 'home',
        props: {
            navigation: {
                type: Object
            }
        },
        components: {PopularSearchListing, RecentSearchListing},
        data () {
            return {}
        },
        methods: {
            gotoSearch(data) {
                console.log('search clicked', data);
                this.navigation.navigate('Search', {
                    query: data
                });
            }
        }
    }
</script>

<style scoped>
    .container {
        flex: 1;
        background-color: black;
        justify-content: space-between;
    }
</style>