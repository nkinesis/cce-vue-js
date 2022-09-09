<template>
    <label for="field">{{title}}</label>
    <input id="field" type="text">
</template>

<script>
export default {
    name: "AWPInput",
    props: {
        title: String
    }
}
</script>
