<template>
  <div>
    <AWPList title="Grocery list" :list="myGroceryList"></AWPList>
  </div>
</template>

<script>
import AWPList from "@/components/AWPList.vue";
export default {
  components: { AWPList },
  name: "AListExample",
  data() {
    return {
      myGroceryList: ["apple", "banana", "bread"]
    };
  },
  methods: {
    getList: function () {
      // use the fetch function to request data (GET) from the server
      // wait for an answer, it will be a string
      // convert the string to array
      // update the array on the component
    },
    add: function () {
      // use the fetch function to send data (POST) to the server
      // wait for an answer, it will be a string
      // convert the string to array
      // update the array on the component
    },
  },
  beforeMount() {
    // this will execute when the app starts
    // call my getList method, it will read the list from the server
  },
};
</script>
