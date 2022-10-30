<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#"
        >Film Arama Uygulaması</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
              active-class="active"
              aria-current="page"
              href="#"
              >Anasayfa</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/favorites"
              active-class="active"
              class="nav-link"
              href="#"
              >Favoriler</router-link
            >
          </li>
          <filter-bar></filter-bar>
        </ul>
        <SearchBar />
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import FilterBar from "../components/FilterBar.vue";
export default {
  components: {
    SearchBar,
    FilterBar,
  },
};
</script>

<style></style>
