<template>
    <div>
        <h1>XSS example</h1>
        <p>Search for books, don't inject HTML 😉</p>
        <div v-html="showMessage" class="statusBar"></div>
        <table>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Year</th>
            </tr>
            <tr v-for="book in getBooks" :key="book">
                <td>{{book.name}}</td>
                <td>{{book.author}}</td>
                <td>{{book.year}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import bookList from '@/data/books'
export default {
    computed: {
        getBooks: function () {
            if (!this.$route.params.query) {
                return bookList
            } else {
                return bookList.filter(book => book.name.toLowerCase().indexOf(this.$route.params.query.toLowerCase()) > -1);
            }
        },
        showMessage: function () {
            // imagine this is being returned by the back-end...
            if (!this.$route.params.query) {
                return "<p>Nothing to search! Waiting for input.</p>"
            } else {
                return `<p>Showing results for: </p><span>${this.$route.params.query}</span>`
            }
            // vulnerability: encodeURIComponent some HTML that you would like to inject
        },
    }
}
</script>

<style lang="scss">
table {
    width: 60%;
    margin: auto;
    text-align: left;
    border-collapse: collapse;
    tr {
        th,
        td {
            border: 1px solid #000;
            padding: 5px;
        }
    }
}
.statusBar {
    width: 60%;
    display: flex;
    text-align: left;
    margin: 20px auto 10px;
    p {
        margin: 0;
    }
    span {
        margin-left: 5px;
    }
}
</style>