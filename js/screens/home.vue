<template>
    <view class="container">
        <SearchBox :onSearchClicked="gotoSearch"/>
        <popular-search-listing :search="gotoSearch.bind(this)"></popular-search-listing>
        <recent-search-listing :search="gotoSearch.bind(this)"></recent-search-listing>
    </view>
</template>

<script>
    import SearchBox from '../components/searchBox'
    import PopularSearchListing from '../components/popularSearchListing'
    import RecentSearchListing from '../components/recentSearchListing'

    export default {
        name: 'home',
        props: {
            navigation: {
                type: Object
            }
        },
        components: {SearchBox, PopularSearchListing, RecentSearchListing},
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