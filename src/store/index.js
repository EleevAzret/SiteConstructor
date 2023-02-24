import Vue from 'vue';
import Vuex from 'vuex';
import contentStore from './modules/contentStore';

Vue.use(Vuex);

export default new Vuex.Store({
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
