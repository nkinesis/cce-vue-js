<template>
    <h1>Basic example</h1>
    <AWPListCard :numberOfCards="5" cardListTitle="Some title"/>
</template>

<script>
import AWPListCard from '@/components/AWPListCard.vue';
export default {
    name: "GProvideInject",
    components: { AWPListCard }
}
</script>
