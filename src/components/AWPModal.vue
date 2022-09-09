<template>
    <div class="modal">
        <p class="title">{{title}}</p>
        <p>{{content}}</p>
        <p class="close">x</p>
    </div>
</template>

<script>
export default {
    name: "AWPModal",
    props: {
        title: String,
        content: String
    }
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    width: 50%;
    height: 200px;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
    background-color: wheat;
    border: 1px solid black;

    .title {
        font-size: 1.3em;
        font-weight: bold;
    }

    .close {
        position: absolute;
        top: 0;
        right: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: .5s ease;
        &:hover {
            color: blue;
            transition: .5s ease;
        }
    }
}
</style>