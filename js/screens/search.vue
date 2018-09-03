<template>
    <view class="container">
        <flat-list :data="searchData" :key-extractor="(item) => item.id" v-if="!loading">
            <view render-prop-fn="renderItem">
                <search-card v-bind:cardData="args.item" :clicked="setActiveSearch.bind(this, args.item)"/>
            </view>
        </flat-list>
        <activity-indicator size="large" color="#ffffff" v-else/>
        <search-modal :uri="activeSearch['displayUrl']" :close="closeModal"/>
    </view>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import SearchCard from '../components/searchCard'
    import SearchModal from '../components/searchModal'
    export default {
        name: "search",
        components: {SearchCard, SearchModal},
        props: {
            navigation: {
                type: Object
            }
        },
        data () {
            return {
                activeSearch: {}
            }
        },
        mounted () {
            this.search(this.query);
        },
        computed: {
            query () {
                return this.navigation.state.params.query
            },
            ...mapState({
                loading: 'loadingSearchData',
                searchData: 'searchData'
            })
        },
        methods: {
            setActiveSearch (data) {
                this.activeSearch = data;
            },
            closeModal () {
                this.activeSearch = {}
            },
            ...mapActions({
                search: 'fetchSearchData'
            })
        }
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