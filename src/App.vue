<template>
  <div id="app">
    <header id="header"></header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/Logout">Logout</router-link> |
      <router-link to="/movies">All Movies</router-link> |
      <router-link to="/movies/new">Create Movie</router-link>
    </div>
    <router-view />

    <footer id="footer"></footer>
  </div>
</template>

<style></style>
<script>
export default {
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
