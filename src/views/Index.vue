<template>
  <div class="movie-index">
    Search by title: <input v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="movie in movies">{{ movie.title }}</option>
    </datalist>
    <div>
      <button>Sort Alphabetically</button>
    </div>
    <div
      v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')"
    >
      <h2>Title: {{ movie.title }}</h2>
      <p>Year: {{ movie.year }}</p>
      <p>Plot: {{ movie.plot }}</p>
      <p>Director: {{ movie.director }}</p>
      <router-link :to="`/movies/${movie.movie_id}`">More Info</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      movies: [],
      titleFilter: "",
    };
  },
  created: function() {
    axios.get("api/movies").then((response) => {
      console.log(response.data);
      this.movies = response.data;
    });
  },
  methods: {},
};
</script>
