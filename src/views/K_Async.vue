<template>
    <h1>Async component</h1>
    <p>The modal will be loaded asynchronously</p>
    <button @click="showModal = !showModal">Show modal</button>
    <AWPModal v-show="showModal" title="Advanced Web Programming" content="This is a very nice modal popup" />
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    name: "HAsync",
    data() {
        return {
            showModal: false
        }
    },
    components: {
        AWPModal: defineAsyncComponent(() => import('@/components/AWPModal'))
    }
}
</script>

<style>

</style>