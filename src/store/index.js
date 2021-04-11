import { createStore } from "vuex";

const baseURL = "https://api.com";

export default createStore({
  state: {
    places: [
      {
        id: 1,
        title: "The Lounge",
        lastVisited: "2018-01-01",
        images: [
          {
            url: "https://photos.app.goo.gl/QqpUbztDFmk6uux2A",
          },
        ],
        description: "Home",
      },
      {
        id: 2,
        title: "Mexican DBC",
        lastVisited: "2018-01-01",
        images: [
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
        ],
        description:
          "We are so excited to welcome you back to our taproom beginning Thursday May 28th!Things will look a bit different. Our staff have been working very hard to prepare the taprooms to operate safely under the guidelines outlined by the State of Colorado. The safety of our community and of our staff is our primary concern, and we are working hard to provide a fun and relaxing atmosphere while maintaining the new guidelines.",
      },
      {
        id: 3,
        title: "Mexican DBC",
        lastVisited: "2018-01-01",
        description: "Other home",
        images: [
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
        ],
      },
      {
        id: 4,
        title: "Mexican DBC",
        lastVisited: "2018-01-01",
        images: [
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
        ],
        description: "Other home",
      },
      {
        id: 5,
        title: "Mexican DBC",
        lastVisited: "2018-01-01",
        images: [
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
        ],
        description: "Other home",
      },
      {
        id: 6,
        title: "Mexican DBC",
        lastVisited: "2018-01-01",
        images: [
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
        ],
        description: "Other home",
      },
      {
        id: 7,
        title: "Mexican DBC",
        lastVisited: "2018-01-01",
        images: [
          {
            url:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
          },
        ],
        description: "Other home",
      },
    ],
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
  },
  modules: {},
});
