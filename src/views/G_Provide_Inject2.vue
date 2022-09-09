<template>
    <h1>Avoiding collisions</h1>
    <AWPFrame>
        <AWPListCard :numberOfCards="5" cardListTitle="Some title" />
    </AWPFrame>
</template>

<script>
import AWPFrame from '@/components/AWPFrame.vue';
import AWPListCard from '@/components/AWPListCard.vue';
export default {
    name: "GProvideInject",
    components: { AWPListCard, AWPFrame }
}
</script>
