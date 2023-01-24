<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue.js examples</h1>
    <ul class="main">
      <li>
        <router-link to="list">Simple list</router-link>
      </li>
      <li>
        <router-link to="vmodel">V-model</router-link>
      </li>
      <li>
        <router-link to="computed-prop">Computed properties</router-link>
      </li>
      <li>
        <router-link to="style-bindings">Class and style bindings</router-link>
      </li>
      <li>
        <router-link to="fallthrough-attr">Fallthrough attributes</router-link>
      </li>
      <li>
        <router-link to="refs">Refs</router-link>
      </li>
      <li>
        <router-link to="watchers">Watchers</router-link>
      </li>
      <li>
        Provide/Inject
      </li>
      <ul class="sub">
        <li>
          <router-link to="provide-inject1">Basic example</router-link>
        </li>
        <li>
          <router-link to="provide-inject2">Avoiding collisions</router-link>
        </li>
      </ul>
      <li>
        <router-link to="composable">Composables</router-link>
      </li>
      <li>
        <router-link to="async">Async components</router-link>
      </li>
      <li>
        <router-link to="custom-directives">Custom directives</router-link>
      </li>
      <li>
        <router-link to="keep-alive">KeepAlive</router-link>
      </li>
      <li>
        <router-link to="state-mgmt">State Management</router-link>
      </li>
      <li>
        <router-link to="transition">Transition</router-link>
      </li>
      <li>
        <router-link to="dynamic-routes/1">Dynamic routes</router-link>
      </li>
      <li>
        <router-link to="qwertywxyz">404 page</router-link>
      </li>
      <li>
        <router-link to="xss/game">XSS example</router-link>
      </li>
      <li>
        <router-link to="json-server">Test json-server</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  beforeMount() {
    fetch('/api/users').then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data)
    })
  }
}
</script>

<style lang="scss">
ul {

  &.main {
    width: 80%;
    margin: 0 auto 50px;
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
