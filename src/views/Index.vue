<template>
  <div class="movie-index">

    <div v-for="movie in movies">
      <h2>Title: {{ movie.title }}</h2>
      <p>Year: {{movie.year}}
      <p>Plot: {{ movie.plot }}</p>
      <p>Director: {{ movie.director }}</p>
      <router-link :to="`/movies/${movie.id}`">More Info</router-link>
    </div>
  </div>

</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    axios.get("api/movies").then((response) => {
      console.log(response.data);
      this.movies = response.data;
    });
  },
  methods: {},
};
</script>