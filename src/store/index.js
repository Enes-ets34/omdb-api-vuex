import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    movies: [],
    favorites: [],
    baseUrl: "https://www.omdbapi.com",
    headers: {
      "access-control-allow-origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "*",
    },
    apiKey: "52ea8c67",
    favBaseUrl:
      "https://my-json-server.typicode.com/Enes-ets34/omdb-api-json-server",
    // favBaseUrl: " http://localhost:3000 ",
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
      state.favorites = state.favorites.filter((i) =>
        i.Title.toLowerCase().includes(key.toLowerCase())
      );
    },
    descMovies(state) {
      let years = [];
      state.movies = state.movies.filter((i) => {
        years.push(i.Year);
        years.sort((a, b) => b - a);
      });
      console.log(years);
    },
    ascMovies(state) {
      console.log(key);
    },
  },
  actions: {
    searchMovies({ commit, state }, searchKey) {
      axios
        .get(`${state.baseUrl}/?apiKey=${state.apiKey}&s=${searchKey}`, {
          headers: { ...state.headers },
        })
        .then((res) => {
          commit("fillMovies", res.data.Search);
        })
        .catch((err) => console.error(err));
    },
    getFavorites({ commit, state }) {
      axios
        .get(`${state.favBaseUrl}`, {
          withCredentials: false,
          headers: { ...state.headers },
        })
        .then((res) => {
          commit("fillFavorites", res.data);
        })
        .catch((err) => console.error(err));
    },
    addFavorites({ commit, state }, movie) {
      axios
        .post(
          `${state.favBaseUrl}`,
          {
            withCredentials: false,
            headers: { ...state.headers },
          },
          movie
        )
        .then((res) => {
          commit("addFavorites", res.data);
          alert(movie.Title + " Favorilere Eklendi");
        })
        .catch((err) => console.error(err));
    },
    removeFavorites({ commit, state }, movie) {
      console.log(movie);
      axios
        .delete(`${state.favBaseUrl}/${movie.id}`, {
          withCredentials: false,
          headers: { ...state.headers },
        })
        .then((res) => {
          alert(movie.Title + " Favorilerden kaldırıldı.");
          commit(
            "fillFavorites",
            state.favorites.filter((i) => i.id !== movie.id)
          );
        })
        .catch((err) => console.error(err));
    },
    filterFavorites({ commit }, key) {
      commit("filterFavorites", key);
    },
    sortMovies({ commit }, key) {
      if (key === "desc") {
        commit("descMovies", key);
      }
      if (key === "asc") {
        commit("ascMovies", key);
      }
    },
  },
  getters: {
    getMovies: (state) => state.movies,
    getFavorites: (state) => state.favorites,
  },
});
