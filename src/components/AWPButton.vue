<template>
    <button class="blue" @click="setTextClicked">{{text}} {{textClicked}}</button>
</template>

<script>
export default {
    name: "AWPButton",
    data() {
        return {
            textClicked: ''
        }
    },
    methods: {
        setTextClicked: function () {
            this.textClicked = ':)'
        }
    },
    props: {
        text: String
    }
}
</script>

<style>
.blue {
    padding: 5px;
    border: 1px solid #000;
    background-color: deepskyblue;
}
</style>