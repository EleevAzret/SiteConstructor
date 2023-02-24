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

export default store;
