<template>
    <h1>{{ title }}</h1>
    <ul>
        <AWPListItem v-for="item in list" :key="item.id" :text="item.name"></AWPListItem>
    </ul>
</template>

<script>
import AWPListItem from '@/components/AWPListItem.vue'
export default {
    name: 'AWPList',
    props: {
        title: String,
        list: Array
    },
    components: {AWPListItem}
}
</script>

<style scoped>
ul {
    width: 50%;
    margin: auto;
    padding: 10px;
    border: 1px solid black;
}
</style>