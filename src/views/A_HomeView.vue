<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue.js examples</h1>
    <ul class="main">
      <li>
        <router-link to="exampleA">V-model</router-link>
      </li>
      <li>
        <router-link to="exampleB">Computed properties</router-link>
      </li>
      <li>
        <router-link to="exampleC">Watchers</router-link>
      </li>
      <li>
        <router-link to="exampleD">Class and style bindings</router-link>
      </li>
      <li>
        <router-link to="exampleE">Fallthrough attributes</router-link>
      </li>
      <li>
        <router-link to="exampleF">Refs</router-link>
      </li>
      <li>
        Provide/Inject
      </li>
      <ul class="sub">
        <li>
          <router-link to="exampleG1">Basic example</router-link>
        </li>
        <li>
          <router-link to="exampleG2">Avoiding collisions</router-link>
        </li>
      </ul>
      <li>
        <router-link to="exampleH">Async components</router-link>
      </li>
      <li>
        <router-link to="exampleI">Composables</router-link>
      </li>
      <li>
        <router-link to="exampleJ">Custom directives</router-link>
      </li>
      <li>
        <router-link to="exampleK">Transition</router-link>
      </li>
      <li>
        <router-link to="exampleL">KeepAlive</router-link>
      </li>
      <li>
        <router-link to="exampleM">State Management</router-link>
      </li>
      <li>
        <router-link to="exampleN/1">Dynamic routes</router-link>
      </li>
      <li>
        <router-link to="qwertywxyz">404 page</router-link>
      </li>
      <li>
        <router-link to="exampleP/game">XSS example</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style lang="scss">
ul{

  &.main {
    width: 80%;
  margin: auto;
  text-align: left;
  }

  &.sub {
  margin: auto;
  text-align: left;
  }


  li {
    list-style-type: lower-alpha;

    a {
      color: #000;
      line-height: 1.5em;
    }
  }
}
</style>
