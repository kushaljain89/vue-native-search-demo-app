<template>
    <touchable-opacity :active-opacity="1" class="card-container" :on-press="clicked">
        <text class="heading">{{cardData.displayText}}</text>
    </touchable-opacity>
</template>

<script>
    export default {
        name: "suggestionCard",
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
        font-size: 15;
        font-weight: bold;
        color: black;
        font-family: Roboto;
    }

    .card-container {
        padding-top: 10;
        padding-bottom: 10;
        padding-left: 15;
        padding-right: 15;
    }
</style>