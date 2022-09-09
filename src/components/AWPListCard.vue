<template>
    <p>{{cardListTitle}}</p>
    <div>
        <label>Use dark mode</label>
        <input @click="isDarkMode = !isDarkMode" type="checkbox">
    </div>
    <div class="card-list" :class="{dark: isDarkMode}" @click="mode = 2">
        <AWPCard v-for="item in numberOfCards" :title="'Item' + item" :key="item"></AWPCard>
    </div>
</template>

<script>
import AWPCard from './AWPCard.vue';

export default {
    name: "AWPCardList",
    props: {
        numberOfCards: Number,
        cardListTitle: String,
    },
    data() {
        return {
            isDarkMode: false
        }
    },
    provide() {
        return {
            isDarkMode: this.isDarkMode
        }
    },
    components: { AWPCard }
}
</script>

<style lang="scss">
.card-list {
    width: 80%;
    margin: auto;
    display: flex;
    background-color: #eee;

    &.dark {
        background-color: #686161;
    }
}
</style>