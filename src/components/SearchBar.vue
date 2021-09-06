<template>
  <div class="d-flex">
    <input
      class="form-control me-2"
      placeholder="Film adı giriniz"
      @keypress.enter="searchMovies($event.target.value)"
      @keyup="filterMovies($event.target.value)"
      type="text"
    />
    <button class="btn btn-outline-dark">Search</button>
  </div>
</template>

<script>
export default {
  methods: {
    searchMovies(key) {
      if (this.$route.name === "Favorites") {
        this.filterMovies(key);
      } else {
        this.$store.dispatch("searchMovies", key);
      }
    },
    filterMovies(key) {
      this.$store.dispatch("filterFavorites", key);
    },
  },
};
</script>

<style></style>
