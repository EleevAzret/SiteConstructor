import Vue from "vue";

const contentStore = {
  namespaced: true,
  state: {
    titleContent: {
      mainTitle: 'Add your title',
      mainContent: 'Add your content',
    },
    cardsContent: {
      1: {
        title: 'First card title',
        content: 'First card content',
        id: 1,
        color: 'light',
      },
      2: {
        title: 'Second card title',
        content: 'Second card content',
        id: 2,
        color: 'light',
      },
      3: {
        title: 'Third card title',
        content: 'Third card content',
        id: 3,
        color: 'light',
      },
      4: {
        title: 'Third card title',
        content: 'Third card content',
        id: 4,
        color: 'light',
      },
    },
  },
  getters: {
    titleContent: ({ titleContent }) => titleContent,
    cardsContent: ({ cardsContent }) => cardsContent,
  },
  mutations: {
    CHANGE_TITLE(state, [type, content]) {
      state.titleContent[type] = content;
    },
    DELETE_TITLE(state, type) {
      state.titleContent[type] = '';
    },
    ADD_TITLE(state, type) {
      state.titleContent[type] = `Click and text your new ${type}`
    },
    CHANGE_CARDS(state, [id, type, content]) {
      state.cardsContent[id][type] = content;
    },
    DELETE_CARD_CONTENT(state, [id, type]) {
      state.cardsContent[id][type] = '';
    },
    ADD_CARD_CONTENT(state, [id, type]) {
      state.cardsContent[id][type] = `Click and text your new ${type}`;
    },
    CHANGE_CARD_COLOR(state, [id, color]) {
      state.cardsContent[id].color = color;
    },
    ADD_CARD(state, [content, _id]) {
      Vue.set(state.cardsContent, _id, content);
    },
    DELETE_CARD(state, id) {
      Vue.delete(state.cardsContent, id);
    },
  },
  actions: {
    changeTitleContent({ commit }, [type, content]) {
      commit('CHANGE_TITLE', [type, content]);
    },
    deleteTitleContent({ commit }, type) {
      commit('DELETE_TITLE', type);
    },
    addTitleContent({ commit }, type) {
      commit('ADD_TITLE', type);
    },
    changeCardContent({ commit }, [id, type, content]) {
      commit('CHANGE_CARDS', [id, type, content]);
    },
    deleteCardContent({ commit }, [id, type]) {
      commit('DELETE_CARD_CONTENT', [id, type]);
    },
    addCardContent({ commit }, [id, type]) {
      commit('ADD_CARD_CONTENT', [id, type]);
    },
    changeCardColor({ commit }, [id, color]) {
      commit('CHANGE_CARD_COLOR', [id, color]);
    },
    addCard({ commit }) {
      const _id = Math.random() * 10;
      const content = {
          title: 'Your new card title',
          content: 'Your new card content',
          color: 'light',
          id: _id,
        };
      commit('ADD_CARD', [content, _id]);
    },
    deleteCard({ commit }, id) {
      commit('DELETE_CARD', id);
    },
  },
};

export default contentStore;
