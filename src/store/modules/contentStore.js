import Vue from 'vue';
import axios from '@/plugins/axios';
import topMovies from '../mocks/topMovies';
import searchMovies from '../mocks/searchMovies';

const components = window.localStorage.getItem('components');

function serializeMovies(movies) {
  const result = {};
  const id = Math.random() * 10;

  const list = movies.reduce((acc, item) => {
    const movie = item;
    movie.poster_path = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://gdr.one/simg/300x300/fff/000?text=${movie.title}`;
    acc[movie.id] = movie;
    return acc;
  }, {});

  result.type = 'movies';
  result.id = id;
  result.movies = list;

  return result;
}

const contentStore = {
  namespaced: true,
  state: {
    components: components ? JSON.parse(components) : [
      {
        mainTitle: 'Add your title',
        mainContent: 'Add your content',
        id: 1,
        type: 'titleComponent',
      },
      {
        id: 3,
        type: 'cardComponent',
        cards: {
          31: {
            title: 'First card title',
            content: 'First card content',
            id: 31,
            color: 'light',
          },
          32: {
            title: 'Second card title',
            content: 'Second card content',
            id: 32,
            color: 'warning',
          },
          33: {
            title: 'Third card title',
            content: 'Third card content',
            id: 33,
            color: 'success',
          },
        },
      },
    ],
  },
  getters: {
    allComponents: ({ components }) => components,
  },
  mutations: {
    SAVE_CONTENT({ components }) {
      window.localStorage.setItem('components', JSON.stringify(components));
    },
    CHANGE_TITLE({ components }, [id, type, content]) {
      components.forEach((component) => {
        if (component.id == id) {
          Vue.set(component, type, content);
        }
      });
    },
    DELETE_TITLE({ components }, [id, type]) {
      components.forEach((component) => {
        if (component.id == id) {
          Vue.set(component, type, '');
        }
      });
    },
    ADD_TITLE({ components }, [id, type]) {
      components.forEach((component) => {
        if (component.id == id) {
          Vue.set(component, type, `Click and text your new ${type}`);
        }
      });
    },
    ADD_COMPONENT({ components }, value) {
      Vue.set(components, components.length, value);
    },
    CHANGE_CARDS({ components }, [sectionId, cardId, type, content]) {
      components.forEach((component) => {
        if (component.id == sectionId) {
          Vue.set(component.cards[cardId], type, content);
        }
      });
    },
    DELETE_CARD_CONTENT({ components }, [sectionId, cardId, type]) {
      components.forEach((component) => {
        if (component.id == sectionId) {
          Vue.set(component.cards[cardId], type, '');
        }
      });
    },
    ADD_CARD_CONTENT({ components }, [sectionId, cardId, type]) {
      const msg = `Click and text your new ${type}`;
      components.forEach((component) => {
        if (component.id == sectionId) {
          Vue.set(component.cards[cardId], type, msg);
        }
      });
    },
    CHANGE_CARD_COLOR({ components }, [sectionId, cardId, color]) {
      components.forEach((component) => {
        if (component.id == sectionId) {
          Vue.set(component.cards[cardId], 'color', color);
        }
      });
    },
    ADD_CARD({ components }, [content, _id, key]) {
      components.forEach((component) => {
        if (component.id == key) {
          Vue.set(component.cards, _id, content);
        }
      });
    },
    DELETE_CARD({ components }, [sectionId, cardId]) {
      components.forEach((component) => {
        if (component.id == sectionId) {
          Vue.delete(component.cards, cardId);
        }
      });
    },
    DELETE_COMPONENT({ components }, id) {
      components.forEach((component, index) => {
        if (component.id == id) {
          Vue.delete(components, index);
        }
      });
    },
    SORT_COMPONENTS(state, keys) {
      Vue.set(state, 'components', keys);
    },
    SEARCHING_MOVIES({ components }, [movies, id]) {
      components.forEach((component) => {
        if (component.id == id) {
          Vue.set(component, 'searchMovies', movies);
        }
      });
    },
    DELETE_SEARCHING_LIST({ components }, moviesListId) {
      components.forEach((component) => {
        if (component.id == moviesListId) {
          Vue.delete(component, 'searchMovies');
        }
      });
    },
  },
  actions: {
    changeTitleContent({ commit }, [id, type, content]) {
      commit('CHANGE_TITLE', [id, type, content]);
      commit('SAVE_CONTENT');
    },
    deleteTitleContent({ commit }, [id, type]) {
      commit('DELETE_TITLE', [id, type]);
      commit('SAVE_CONTENT');
    },
    addTitleContent({ commit }, [id, type]) {
      commit('ADD_TITLE', [id, type]);
      commit('SAVE_CONTENT');
    },
    changeCardContent({ commit }, [sectionId, cardId, type, content]) {
      commit('CHANGE_CARDS', [sectionId, cardId, type, content]);
      commit('SAVE_CONTENT');
    },
    deleteCardContent({ commit }, [sectionId, cardId, type]) {
      commit('DELETE_CARD_CONTENT', [sectionId, cardId, type]);
      commit('SAVE_CONTENT');
    },
    addCardContent({ commit }, [sectionId, cardId, type]) {
      commit('ADD_CARD_CONTENT', [sectionId, cardId, type]);
      commit('SAVE_CONTENT');
    },
    changeCardColor({ commit }, [sectionId, cardId, color]) {
      commit('CHANGE_CARD_COLOR', [sectionId, cardId, color]);
      commit('SAVE_CONTENT');
    },
    addTitleComponent({ commit }) {
      const id = Math.random() * 10;
      const content = {
        mainTitle: 'Add your title',
        mainContent: 'Add your content',
        id,
        type: 'titleComponent',
      };
      commit('ADD_COMPONENT', content);
      commit('SAVE_CONTENT');
    },
    addCard({ commit }, key) {
      const id = Math.random() * 10;
      const content = {
        title: 'Your new card title',
        content: 'Your new card content',
        color: 'light',
        id,
      };
      commit('ADD_CARD', [content, id, key]);
      commit('SAVE_CONTENT');
    },
    deleteCard({ commit }, id) {
      commit('DELETE_CARD', id);
      commit('SAVE_CONTENT');
    },
    addCardComponent({ commit }) {
      const id = Math.random() * 10;
      const content = {
        id,
        type: 'cardComponent',
        cards: {},
      };
      commit('ADD_COMPONENT', content);
      commit('SAVE_CONTENT');
    },
    deleteComponent({ commit }, id) {
      commit('DELETE_COMPONENT', id);
      commit('SAVE_CONTENT');
    },
    dragComponents({ commit }, keys) {
      const filtered = keys.map((key) => {
        if (key) return key;
      });
      commit('SORT_COMPONENTS', filtered);
      commit('SAVE_CONTENT');
    },
    deleteMoviesSearch({ commit }, id) {
      commit('DELETE_SEARCHING_LIST', id);
      commit('SAVE_CONTENT');
    },
    initMovieStore: {
      handler({ dispatch }) {
        dispatch('fetchMovies');
      },
      root: true,
    },
    async fetchMovies({ commit }) {
      try {
        const response = await axios.get(
          `${topMovies}`,
        );

        const min = Math.floor(Math.random() * 10);

        const movies = response.results.splice(min, 5);
        const serialize = serializeMovies(movies);

        commit('ADD_COMPONENT', serialize);
        commit('SAVE_CONTENT');
      } catch (err) {
        console.log(err);
      }
    },
    async searchMovies({ commit }, [keyword, id]) {
      try {
        const response = await axios.get(`${searchMovies}`, {
          params: {
            query: keyword,
          },
        });

        const movies = response.results.length > 5
          ? response.results.splice(0, 5)
          : response.results;

        const serialize = serializeMovies(movies);

        commit('SEARCHING_MOVIES', [serialize, id]);
        commit('SAVE_CONTENT');
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default contentStore;
