<template>
    <touchable-opacity :active-opacity="0.7" class="card-container" :on-press="clicked">
        <text class="heading font">{{cardData.name}}</text>
        <text class="paragraph font" :number-of-lines="3">{{cardData.snippet}}</text>
        <text class="link-text font">{{cardData.displayUrl}}</text>
    </touchable-opacity>
</template>

<script>
    export default {
        name: "searchCard",
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
        color: white;
    }

    .paragraph {
        color: #888E95;
        font-size: 12;
        text-align: justify;
    }

    .card-container {
        padding-top: 10;
        padding-bottom: 10;
        padding-left: 15;
        padding-right: 15;
    }

    .link-text {
        color: #1EDAFF;
        font-size: 12;
    }

    .font {
        font-family: Roboto;
    }
</style>