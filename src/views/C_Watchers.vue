<template>
    <h1>Watchers</h1>
    <form ref="form1">
        <div class="field">
            <label for="name">Full name</label>
            <input id="name" v-model="name" placeholder="Your name" />
        </div>
        <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="email" placeholder="Your email" />
        </div>
        <button>Send!</button>
    </form>
</template>

<script>
export default {
    name: "CWatchers",
    data() {
        return {
            name: "",
            email: "",
        }
    },
    watch: {
        name: function (newName, oldName) {
            if (oldName.indexOf("1") > -1 && newName.indexOf("2") > -1) {
                document.querySelector("#name").style.backgroundColor = "orange";
            } else {
                document.querySelector("#name").style.backgroundColor = "white";
            }
        },
        email: function (newName, oldName) {
            console.log(newName, oldName)
            // check if it is a business e-mail
        }
    },
}
</script>

<style lang="scss">
form {
    width: 50%;
    margin: auto;

    .field {
        display: flex;
        flex-flow: column;
        margin-bottom: 30px;

        &.row {
            flex-flow: row-reverse;
            align-items: center;

            label {
                margin-bottom: 0;
            }
        }

        label {
            text-align: left;
            margin-bottom: 10px;
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

.summary {
    width: 50%;
    margin: auto;
    text-align: left;
}
</style>