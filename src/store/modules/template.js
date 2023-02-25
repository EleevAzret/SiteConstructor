import Vue from "vue";

let titleContent = window.localStorage.getItem('titleContent');
let cardsContent = window.localStorage.getItem('cardsContent');

const contentStore = {
  namespaced: true,
  state: {
    titleContent: titleContent ? JSON.parse(titleContent) :
      {
        1: {
          mainTitle: 'Add your title',
          mainContent: 'Add your content',
          id: 1,
        }
      },
    cardsContent: cardsContent ? JSON.parse(cardsContent) : 
      {
        32: {
          cards: {
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
          },
          id: 32,
        }
      },
  },
  getters: {
    titleContent: ({ titleContent }) => titleContent,
    cardsContent: ({ cardsContent }) => cardsContent,
    allComponents: (state) => Object.keys(state),
  },
  mutations: {
    SAVE_CONTENT(state) {
      window.localStorage.setItem('titleContent', JSON.stringify(state.titleContent));
      window.localStorage.setItem('cardsContent', JSON.stringify(state.cardsContent));
    },
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
      commit('SAVE_CONTENT');
    },
    deleteTitleContent({ commit }, type) {
      commit('DELETE_TITLE', type);
      commit('SAVE_CONTENT');
    },
    addTitleContent({ commit }, type) {
      commit('ADD_TITLE', type);
      commit('SAVE_CONTENT');
    },
    changeCardContent({ commit }, [id, type, content]) {
      commit('CHANGE_CARDS', [id, type, content]);
      commit('SAVE_CONTENT');
    },
    deleteCardContent({ commit }, [id, type]) {
      commit('DELETE_CARD_CONTENT', [id, type]);
      commit('SAVE_CONTENT');
    },
    addCardContent({ commit }, [id, type]) {
      commit('ADD_CARD_CONTENT', [id, type]);
      commit('SAVE_CONTENT');
    },
    changeCardColor({ commit }, [id, color]) {
      commit('CHANGE_CARD_COLOR', [id, color]);
      commit('SAVE_CONTENT');
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
      commit('SAVE_CONTENT');
    },
    deleteCard({ commit }, id) {
      commit('DELETE_CARD', id);
      commit('SAVE_CONTENT');
    },
  },
};

export default contentStore;
