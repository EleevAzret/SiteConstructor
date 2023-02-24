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
      },
      2: {
        title: 'Second card title',
        content: 'Second card content',
        id: 2,
      },
      3: {
        title: 'Third card title',
        content: 'Third card content',
        id: 3,
      },
      4: {
        title: 'Third card title',
        content: 'Third card content',
        id: 4,
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
      console.log(type, content);
    },
  },
  actions: {
    changeTitleContent({ commit }, [type, content]) {
      commit('CHANGE_TITLE', [type, content]);
    },
  },
};

export default contentStore;
