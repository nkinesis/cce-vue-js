<template>
    <h1>Refs</h1>
    <AWPButton id="btn1" class="blue" text="Test button"></AWPButton>
</template>

<script>
import AWPButton from '@/components/AWPButton.vue';
export default {
    name: "FRefs",
    components: { AWPButton },
    mounted() {
        console.log(this.$refs.btn1)
    }
}
</script>
