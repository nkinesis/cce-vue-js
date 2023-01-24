<template>
    <li> {{ text }} </li>
</template>

<script>
export default {
    name: 'AWPListItem',
    props: {
        text: String
    }
}
</script>

<style scoped>
    li {
        width: 50px;
        margin-left: 20px;
        list-style-type: disc;
    }
</style>