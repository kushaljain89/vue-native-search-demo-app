<template>
    <view class="container">
        <view class="head-container">
            <nb-H3 class="white-text">Recent Searches</nb-H3>
            <touchable-opacity class="clear-button" :on-press="clear">
                <text class="white-text">clear</text>
            </touchable-opacity>
        </view>
        <view class="divider"></view>
        <flat-list :data="cards" :key-extractor="(item, index) => index.toString()" :bounces="false">
            <view render-prop-fn="renderItem">
                <listing-card v-bind:cardData="args.item" :clicked="clicked.bind(this, args.item)"/>
            </view>
            <view render-prop="ListEmptyComponent" :style="{alignItems: 'center', paddingVertical: 20}">
                <text :style="{color: '#ffffff', fontFamily: 'Roboto'}">No Searches</text>
            </view>
        </flat-list>
    </view>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import ListingCard from './listingCard'

    export default {
        name: "recentSearchListing",
        props: {
            search: {
                type: Function
            }
        },
        components: {ListingCard},
        computed: mapState({
            cards: 'recents'
        }),
        methods: {
            clicked(data) {
                console.log('clicked', data);
                this.search(data.query);
            },
            ...mapActions({
                clear: 'resetRecents'
            })
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 30;
        padding-left: 10;
        padding-right: 10;
        flex: 1;
    }

    .white-text {
        color: white;
        font-family: Roboto;
    }

    .divider {
        height: 1;
        background-color: white;
        margin-top: 5;
        margin-bottom: 5;
    }

    .head-container {
        flex-direction: row;
        justify-content: space-between;
    }

    .clear-button {
        padding: 5;
        border-radius: 3;
        border-width: 1;
        border-color: white;
    }
</style>