<template>
  <div class="movies-new">
    <div>
      Title: <input type="text" v-model="newMovieTitle" /><br />
      Year: <input type="text" v-model="newMovieYear" /><br />
      Plot: <input type="text" v-model="newMoviePlot" /><br />
      <small class="text-danger" v-if="plot.length > 200"
        >The plot can only be 200 characters long.</small
      >
      Director: <input type="text" v-model="newMovieDirector" /><br />
      <button v-on:click="createMovie()">Create Movie</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
    };
  },
  created: function() {},
  methods: {
    createMovie: function() {
      var params = {
        title: this.newMovieTitle,
        year: this.newMovieYear,
        plot: this.newMoviePlot,
        director: this.newMovieDirector,
      };
      axios
        .post("/api/movies", params)
        .then((response) => {
          console.log("Success", response.data);
          this.products.push(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
