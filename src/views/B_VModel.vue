<template>
    <h1>V-model</h1>
    <form ref="form1">
        <div class="field">
            <label for="name">Full name</label>
            <input id="name" v-model="name" placeholder="Your name" />
        </div>
        <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="email" placeholder="Your email"
                :class="{ gmail: isGmail, hotmail: isHotmail }" />
        </div>
        <div class="field">
            <label for="phone">Phone</label>
            <input id="phone" v-model="phone" placeholder="Your phone" />
        </div>
        <div class="field">
            <label for="interest">Interests</label>
            <select id="interest" v-model="interest">
                <option value="-1">Please choose one...</option>
                <option v-for="value, key in list_interests" :key="key" :value=key>{{ value }}</option>
            </select>
        </div>
        <div class="field row">
            <label for="is_newsletter">I would like to subscribe to the newsletter</label>
            <input id="is_newsletter" type="checkbox" v-model="is_newsletter">
        </div>
        <button>Send!</button>
    </form>

    <hr>

    <h2>Your data</h2>
    <div class="summary">
        <p>Your name is {{ name }}</p>
        <p>Your contact information is: {{ email }}, {{ phone }}</p>

        <p v-if="interest == '-1'">You are interested in nothing</p>
        <p v-else>You are interested in {{ list_interests[interest] }}</p>

        <p v-if="is_newsletter">You WANT to subscribe to the newsletter</p>
        <p v-else>You DON'T WANT to subscribe to the newsletter</p>
    </div>
</template>

<script>
export default {
    name: "AVModel",
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            interest: -1,
            is_newsletter: false,
            list_interests: ["Front-end", "Back-end", "Databases", "Full-stack"]
        }
    },
    computed: {
        isGmail: function () {
            // check if contains gmail
            return false
        },
        isHotmail: function () {
            // check if contains Microsoft email prefixes
            return false
        },
    },
    watch: {
        name: function (newName, oldName) {
            // if the name changes, do something
            console.log(newName, oldName)
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