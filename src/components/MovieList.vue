<template>
  <div class="col-sm-6 mx-auto">
    <Movie v-for="movie in getMovies" :key="movie" :movie="movie" />
  </div>
</template>

<script>
import Movie from "./Movie.vue";
export default {
  components: {
    Movie,
  },
  props: {
    getMovies: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.$store.dispatch("getFavorites");
  },
};
</script>

<style></style>
