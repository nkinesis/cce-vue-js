<template>
    <h1>Dynamic routes</h1>
    <p>This view was lazy-loaded, and we can read its route parameters</p>
    <p>Parameter "id": {{ $route.params.id }}</p>
</template>

<script>
export default {
    name: "NDynamicRoutes"
}
</script>

<style>

</style>