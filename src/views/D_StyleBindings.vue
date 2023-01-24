<template>
    <h1>Class and style bindings</h1>
    <div class="displaySquares">
        <div class="square" :class="{paintRed: is_square1_red, paintBlue: is_square1_blue}"></div>
        <div class="square" :class="{rotate: is_square2_rotated}" :style="{backgroundColor: someColor}"></div>
    </div>
    <form ref="form1">
        <div class="field row">
            <input id="is_first_square_red" type="checkbox" v-model="is_square1_red">
            <label for="is_first_square_red">Paint the first square red</label>
        </div>
        <div class="field row">
            <input id="is_first_square_blue" type="checkbox" v-model="is_square1_blue">
            <label for="is_first_square_blue">Paint the first square blue</label>
        </div>
        <div class="field row">
            <input id="is_second_square_rotated" type="checkbox" v-model="is_square2_rotated">
            <label for="is_second_square_rotated">Rotate the second square</label>
        </div>
        <!-- Challenge! -->
        <button>Change color of the second square</button>
    </form>
</template>

<script>
export default {
    name: "DStyleBindings",
    data() {
        return {
            is_square1_red: false,
            is_square1_blue: false,
            is_square2_rotated: false,
            someColor: "gray"
        }
    }
}
</script>

<style lang="scss">
.displaySquares {
    width: 50%;
    min-width: 300px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    margin: 20px auto 50px;

    .square {
        width: 100px;
        height: 100px;
        border: 1px solid #000;
        transition: .5s ease;

        &.paintRed.paintBlue {
            background-color: purple
        }

        &.paintRed {
            background-color: red
        }

        &.paintBlue {
            background-color: blue
        }

        &.rotate {
            transform: rotate(45deg)
        }
    }
}

form {
    width: 50%;
    margin: auto;

    .field {
        display: flex;
        flex-flow: column;
        margin-bottom: 30px;

        &.row {
            flex-flow: row;
            align-items: center;

            label {
                margin-bottom: 0;
            }
        }

        label {
            text-align: left;
            margin-bottom: 10px;
            margin-left: 10px;
        }

        input,
        select {
            height: 2em;

            &.gmail {
                background-color: crimson;
            }

            &.hotmail {
                background-color: seagreen;
            }
        }

        input[type=checkbox] {
            width: 20px;
            height: 20px;
        }
    }
}
</style>