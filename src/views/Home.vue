<template>
  <div class="home">
    <div class="container mt-5">
      <div class="row">
        <movie-list :getMovies="getMovies"></movie-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieList from "../components/MovieList.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { MovieList },
  computed: {
    ...mapGetters({
      getMovies: "getMovies",
    }),
  },

};
</script>
