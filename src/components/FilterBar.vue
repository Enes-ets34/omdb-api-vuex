<template>
  <li v-if="!movieCount" class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Sırala
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
        <a @click="sortMovies('desc')" class="dropdown-item" href="#"
          >Yıla Göre: Artan</a
        >
      </li>
      <!-- asc -->
      <li><hr class="dropdown-divider" /></li>
      <li>
        <a @click="sortMovies('asc')" class="dropdown-item" href="#"
          >Yıla Göre: Azalan</a
        >
      </li>
    </ul>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    sortMovies(key) {
      this.$store.dispatch("sortMovies", key);
    },
  },
  computed: {
    ...mapGetters(["getMovies", "getFavorites"]),
    movieCount() {
      return this.getMovies.length === 0 || this.getFavorites.length === 0;
    },
  },
};
</script>

<style></style>
