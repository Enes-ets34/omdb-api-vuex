<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-4 mx-auto">
        <img :src="movie.Poster" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">{{ movie.Title }}</h5>
            <small class="text-muted">{{ movie.Year }} </small>
          </div>

          <p class="card-text">
            {{ movie.Plot }}
          </p>
          <div class="d-flex justify-content-between">
            <p class="card-text">
              <i class="bi bi-star-fill text-warning"></i>
              <small class="text-muted">8.9 </small>
            </p>

            <p class="card-text">
              <i
                @click="addFavorite(movie)"
                class="fa-heart far text-danger"
                :class="favoriteClasses"
              ></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    favoriteClasses() {
      return {
        fas: this.$store.state.favorites.find(
          (f) => f.imdbID === this.movie.imdbID
        ),
      };
    },
  },
  methods: {
    addFavorite(movie) {
      if (this.favoriteClasses.fas === undefined) {
        this.$store.dispatch("addFavorites", movie);
      } else {
        this.$store.dispatch("removeFavorites", movie.id);
      }
    },
  },
};
</script>

<style></style>
