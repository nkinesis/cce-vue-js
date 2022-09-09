<template>
    <div class="card">
        <p>{{isDarkMode ? "Dark" : "Light"}} mode</p>
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    name: "AWPCard",
    props: {
        title: String
    },
    inject:
    {
        isDarkMode: { from: 'isDarkMode' }
    }
    // is this reactive?
    // tip: https://github.com/quasarframework/quasar/discussions/11761#discussioncomment-1863453
}
</script>

<style lang="scss">
.card {
    margin: 20px;
    padding: 20px 30px;
    border: 1px solid #000;
    background-color: #00bfff;
}

.dark {
    .card {
        color: #fff;
        background-color: #000;
    }
}
</style>