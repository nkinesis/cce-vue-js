<template>
    <div>
        <h1>Test json-server</h1>
        <p>The json-server must be running for this example to work correctly</p>
        <table>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Year</th>
            </tr>
            <tr v-for="book in books" :key="book">
                <td>{{book.name}}</td>
                <td>{{book.author}}</td>
                <td>{{book.year}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "SJsonServer",
    data() {
        return {
            books: []
        }
    },
    beforeMount() {
        var vm = this;
        fetch('http://localhost:3004/books')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                //console.log(json)
                vm.books = json
            })
    }
}
/*

*/
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