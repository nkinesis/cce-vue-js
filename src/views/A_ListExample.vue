<template>
    <AWPList title="Grocery list" :list="myGroceryList"></AWPList>
</template>

<script>
import AWPList from '@/components/AWPList.vue'
export default {
    components: { AWPList },
    name: 'AListExample',
    data() {
        return {
            myGroceryList: [
                { id: 1, name: 'bread' },
                { id: 2, name: 'butter' },
                { id: 3, name: 'apples' }
            ]
        }
    },
    methods: {
        getList: function() {
            // make a fetch request to back-end
            // wait for response, get the data
            // pass it to the component
        }
    } 
}
</script>
