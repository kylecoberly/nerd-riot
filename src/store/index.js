import { createStore } from "vuex";

const baseURL = process.env.VUE_APP_BASE_URL;

export default createStore({
  state: {
    places: [],
  },
  getters: {
    getPlace: (state) => (id) => {
      return state.places.find((place) => place.id == id);
    },
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places;
    },
    addPlace(state, newPlace) {
      state.places = [...state.places, newPlace];
    },
  },
  actions: {
    getPlaces({ commit }) {
      return fetch(`${baseURL}/places`)
        .then((response) => response.json())
        .then(({ places }) => {
          commit("setPlaces", places);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    getPlace({ commit }, id) {
      return fetch(`${baseURL}/places/${id}`)
        .then((response) => response.json())
        .then(({ place }) => {
          commit("setPlaces", [place]);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    addPlace({ commit }, newPlace) {
      return fetch(`${baseURL}/places`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlace),
      })
        .then(({ place }) => {
          commit("addPlace", place);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
  modules: {},
});
