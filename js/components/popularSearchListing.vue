<template>
    <view class="container">
        <nb-H3 class="white-text">Popular Searches</nb-H3>
        <view class="divider"></view>
        <flat-list :data="cards" :key-extractor="(item, index) => index.toString()" :bounces="false">
            <view render-prop-fn="renderItem">
                <listing-card v-bind:cardData="args.item" :clicked="clicked.bind(this, args.item)"/>
            </view>
            <view render-prop="ListEmptyComponent" :style="{alignItems: 'center', paddingVertical: 20}">
                <text :style="{color: '#ffffff', fontFamily: 'Roboto'}">No Popular Searches</text>
            </view>
        </flat-list>
    </view>
</template>

<script>
    import ListingCard from './listingCard'
    import {popularSearches} from "../sample";

    export default {
        name: "popularSearchListing",
        props: {
            search: {
                type: Function
            }
        },
        components: {ListingCard},
        data () {
            return {
                cards: popularSearches
            }
        },
        methods: {
            clicked(data) {
                console.log('clicked', data);
                this.search(data.query);
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 30;
        padding-left: 10;
        padding-right: 10;
        flex: 1
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
</style>