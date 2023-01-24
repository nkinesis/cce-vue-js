<template>
    <h1>KeepAlive</h1>
    <p>Switch components but keep their state</p>
    <button @click="switchComponent">Toggle component</button>
    <div class="wrapper">
        <KeepAlive>
            <component :is="currentComponent" v-bind="currentProps"></component>
        </KeepAlive>
    </div>
    <!-- comparison: use v-if instead -->
</template>

<script>
import AWPButton from '@/components/AWPButton.vue';
import AWPInput from '@/components/AWPInput.vue';
export default {
    name: "LKeepAlive",
    data() {
        return {
            currentComponent: "AWPInput",
            buttonProps: {
                text: "This button does nothing"
            },
            inputProps: {
                title: "Write something...",
            },
            currentProps: null
        }
    },
    methods: {
        switchComponent: function () {
            this.currentComponent = this.currentComponent == "AWPButton" ? "AWPInput" : "AWPButton"
            this.currentProps = this.currentComponent == "AWPButton" ? this.buttonProps : this.inputProps
        }
    },
    beforeMount() {
        this.currentProps = this.inputProps
    },
    components: {
        AWPButton,
        AWPInput
    }
}
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 50px auto;
}
</style>