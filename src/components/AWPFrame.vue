<template>
    <div>
        <label>Use dark mode</label>
        <input @click="isDarkMode = !isDarkMode" type="checkbox">
    </div>
    <div class="frame" :class="{dark2: isDarkMode}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "AWPFrame",
    data() {
        return {
            isDarkMode: false
        }
    },
    provide() {
        return {
            isDarkMode: this.isDarkMode
        }
    }
}
// to avoid collisions, provide in all components using a Symbol key
// in the component where you want to inject, import and use the key you want
</script>

<style lang="scss">
.frame {
    width: 100%;
    &.dark2 {
        background-color: #eee;
    }
}
</style>