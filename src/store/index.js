import Vue from 'vue';
import Vuex from 'vuex';
import contentStore from './modules/contentStore';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ['titleContent', 'cardsContent'],
});

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
  plugins: [dataState],
});

export default store;
