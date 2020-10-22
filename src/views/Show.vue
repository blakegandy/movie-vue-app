<template>
  <div class="movies-show">

<h2>Title: {{ movie.title }}</h2>
      <p>Year: {{movie.year}}
      <p>Plot: {{ movie.plot }}</p>
      <p>Director: {{ movie.director }}</p>

    <router-link :to="`/movies/${movie.id}/edit`">Edit</router-link>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get(`/api/movies/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.movie = response.data;
    });
  },
  methods: {},
};
</script>