<template>
    <h1>Transition</h1>
    <button @click="isVisible = !isVisible">Show message</button>
    <Transition>
        <p v-show="isVisible">Hello world</p>
    </Transition>
</template>

<script>
export default {
    name: "KTransition",
    data() {
        return {
            isVisible: false
        }
    }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity .8s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>