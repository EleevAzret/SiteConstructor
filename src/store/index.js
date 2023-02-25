import Vue from 'vue';
import Vuex from 'vuex';
import contentStore from './modules/contentStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contentStore,
  },
});

if (!window.localStorage.getItem('components')) store.dispatch("initMovieStore");

export default store;
