<template>
    <modal animation-type="slide"
           :transparent="false"
           :visible="!!uri">
        <safe-area-view :style="{backgroundColor: 'black', flex: 1}">
            <view class="container">
                <view class="header">
                    <text class="heading">Search</text>
                    <touchable-opacity class="close-button" :on-press="close">
                        <nb-icon name="md-close-circle" :size="25" :style="{color: 'white'}"/>
                    </touchable-opacity>
                </view>
                <web-view
                        :source="{uri: uri}" class="web-view" :start-in-loading-state="true">
                    <view render-prop-function="renderLoading"
                          :style="{flex: 1, alignItems: 'center', justifyContent: 'center'}">
                        <activity-indicator size="large" color="#000000"/>
                    </view>
                </web-view>
            </view>
        </safe-area-view>
    </modal>
</template>

<script>
    export default {
        name: "searchModal",
        props: {
            uri: {
                type: String
            },
            close: {
                type: Function
            }
        }
    }
</script>

<style scoped>
    .container {
        flex: 1;
        justify-content: space-between;
    }

    .header {
        height: 50;
        background-color: black;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    .heading {
        font-family: Roboto;
        color: white;
        font-size: 22;
    }

    .close-button {
        padding: 5;
        position: absolute;
        right: 10;
    }

    .web-view {
        flex: 1;
    }
</style>