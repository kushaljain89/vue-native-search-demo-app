<template>
    <view class="parent" :class="{ 'elevate': isIos }">
        <view class="container">
            <text-input placeholder="What do you want to search" :placeholderTextColor="error ? '#850008' : '#6F6F6F'"
                        class="text-input"
                        underlineColorAndroid="transparent" v-model="query" :on-focus="resetError"></text-input>
            <touchable-opacity class="search-button" :on-press="onPressButton">
                <nb-icon name="search" class="search-icon"/>
            </touchable-opacity>
        </view>
        <view v-if="query.length > 2" class="suggestion-box">
            <flat-list :data="suggestions" :key-extractor="(item) => item.url" v-if="!loading" :keyboard-should-persist-taps="'always'">
                <view render-prop-fn="renderItem">
                    <suggestion-card v-bind:cardData="args.item" :clicked="suggestionClicked.bind(this, args.item)"/>
                </view>
                <view render-prop="ListEmptyComponent" :style="{alignItems: 'center', paddingVertical: 20}">
                    <text :style="{color: '#000000', fontFamily: 'Roboto'}">No Suggestions</text>
                </view>
            </flat-list>
            <activity-indicator size="large" color="#000000" :style="{marginVertical: 20}" v-else/>
        </view>
    </view>
</template>

<script>
    import {Keyboard, Platform} from 'react-native'
    import {mapActions, mapState} from 'vuex'
    import SuggestionCard from './suggestionCard'

    export default {
        name: "searchBox",
        props: {
            onSearchClicked: {
                type: Function
            }
        },
        components: {SuggestionCard},
        data() {
            return {
                query: '',
                error: false,
                timer: null,
                isIos: Platform.OS === 'ios'
            }
        },
        computed: mapState({
            loading: 'loadingSuggestions',
            suggestions: 'suggestions'
        }),
        methods: {
            onPressButton() {
                Keyboard.dismiss();
                if (this.query) {
                    this.error = false;
                    this.onSearchClicked(this.query);
                    this.query = '';
                } else {
                    this.error = true
                }
            },
            resetError() {
                this.error = false
            },
            suggestionClicked(suggestion) {
                this.error = false;
                this.query = '';
                Keyboard.dismiss();
                this.onSearchClicked(suggestion.query);
            },
            ...mapActions({
                suggest: 'fetchSuggestions'
            })
        },
        watch: {
            query(newVal) {
                if (newVal.length > 2) {
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => this.suggest(newVal), 300);
                }
            }
        }
    }
</script>

<style scoped>
    .parent {
        padding-left: 10;
        padding-right: 10;
    }

    .elevate {
        z-index: 10;
        elevation: 10;
    }

    .container {
        flex-direction: row;
        justify-content: space-between;
        background-color: #DDDDDD;
        margin-top: 10;
        padding-left: 10;
        padding-top: 5;
        padding-bottom: 5;
        border-radius: 3;
        z-index: 10;
        elevation: 10;
    }

    .text-input {
        color: black;
        font-size: 14;
        flex: 1;
        font-family: Roboto;
        line-height: 18;
    }

    .search-button {
        width: 50;
        align-items: center;
        justify-content: center;
    }

    .search-icon {
        color: black;
    }

    .suggestion-box {
        position: absolute;
        top: 52;
        left: 10;
        background-color: #DDDDDD;
        width: 100%;
        elevation: 10;
        zIndex: 10;
    }
</style>