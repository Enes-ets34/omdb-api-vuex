<template>
  <div class="container mt-5">
    <div class="row">
      <div v-if="getMovies.length > 0">
        <p class="display-3 text-center">Favoriler</p>
        <hr />
      </div>
      <div v-else>
        <div class="alert alert-danger">
          <p class="display-5 text-center">
            Hiç Favoriniz Yok :(
          </p>
        </div>
      </div>
      <movie-list :getMovies="getMovies"></movie-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieList from "../components/MovieList.vue";
export default {
  components: { MovieList },
  computed: {
    ...mapGetters({
      getMovies: "getFavorites",
    }),
  },
};
</script>

<style></style>
