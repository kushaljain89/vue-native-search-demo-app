<template>
    <touchable-opacity :active-opacity="1" class="card-container" :on-press="clicked">
        <text class="heading" :number-of-lines="1">{{cardData.displayText}}</text>
        <nb-icon name="ios-arrow-forward" :style="{color: 'white', fontSize: 20}"/>
    </touchable-opacity>
</template>

<script>
    export default {
        name: "ListingCard",
        props: {
            cardData: {
                type: Object
            },
            clicked: {
                type: Function
            }
        }
    }
</script>

<style scoped>

    .heading {
        font-size: 13;
        color: white;
        font-family: Roboto;
    }

    .card-container {
        padding: 5;
        flex-direction: row;
        justify-content: space-between;
    }
</style>