<template>
    <h1>State management</h1>
    <p>Other components can change this data: {{reactiveData.courseName}}</p>
    <div class="wrapper">
        <AWPInput title="Write to change the data above"/>
    </div>
</template>

<script>
import reactiveData from '@/reactivity'
import AWPInput from '@/components/AWPInput.vue';
export default {
    name: "MStateMgmt",
    data() {
        return {
            reactiveData
        }
    },
    components: {
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