import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    movies: [],
    favorites: [],
    baseUrl: "http://www.omdbapi.com",
    apiKey: "52ea8c67",
    favBaseUrl: "http://localhost:3000/favorites",
  },
  mutations: {
    fillMovies(state, movies) {
      state.movies = movies;
    },
    fillFavorites(state, favMovies) {
      state.favorites = favMovies;
    },
    addFavorites(state, movie) {
      state.favorites.push(movie);
    },
    filterFavorites(state, key) {
      state.favorites = state.favorites.filter((i) => i.Title.includes(key));
    },
  },
  actions: {
    searchMovies({ commit, state }, searchKey) {
      axios
        .get(`${state.baseUrl}/?apiKey=${state.apiKey}&s=${searchKey}`)
        .then((res) => {
          commit("fillMovies", res.data.Search);
        })
        .catch((err) => console.error(err));
    },
    getFavorites({ commit, state }) {
      axios
        .get(`${state.favBaseUrl}`)
        .then((res) => {
          commit("fillFavorites", res.data);
        })
        .catch((err) => console.error(err));
    },
    addFavorites({ commit, state }, movie) {
      axios
        .post(`${state.favBaseUrl}`, movie)
        .then((res) => {
          commit("addFavorites", res.data);
          alert(movie.Title + " Favorilere Eklendi");
        })
        .catch((err) => console.error(err));
    },
    removeFavorites({ commit, state }, id) {
      axios
        .delete(`${state.favBaseUrl}/${id}`)
        .then((res) => {
          commit(
            "fillFavorites",
            state.favorites.filter((i) => i.id !== id)
          );
        })
        .catch((err) => console.error(err));
    },
    filterFavorites({ commit }, key) {
      commit("filterFavorites", key);
    },
  },
  getters: {
    getMovies: (state) => state.movies,
    getFavorites: (state) => state.favorites,
  },
});
