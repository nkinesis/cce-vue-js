<template>
    <h1>Computed properties</h1>
    <h2>Example: book statistics</h2>
    <div class="summary">
        <p>How many books are there in total? {{ getBookCount }}</p>
        <p>How many books were witten by Stephen King? {{ getStephenKingCount }}</p>
        <p>Which books cost less than 40 dollars?</p>
        <ul>
            <li>Create a list!</li>
        </ul>
    </div>
</template>

<script>
import {bookList} from '@/data/books.js'
export default {
    name: "BComputedProp",
    data() {
        return {
            books: bookList
        }
    },
    computed: {
        getBookCount: function () {
            return this.books.length;
        },
        getStephenKingCount: function () {
            let filteredArray = this.books.filter(book => book.author == "Stephen King")
            return filteredArray.length;
        },
        getCheapBooks: function () {
            // filter by less than X dollars
            return []
        }
        // we could do something with map and reduce too!
    }
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