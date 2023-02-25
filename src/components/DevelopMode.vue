<template>
  <div class="dev-mode">
    <draggable v-model="componentsList" :animation="300" handle=".handle">
      <div class="component" v-for="component in componentsList" :key="component.id">
        <div class="handle">
          <b-icon icon="list" scale="1.2" />
        </div>
        <title-item
          v-if="component.type === 'titleComponent'"
          :key="component.id"
          :titleContent="component"
          class="develop"
        />
        <card-section
          v-if="component.type === 'cardComponent'"
          :key="component.id"
          :cardComponent="component"
          class="develop"
        />
        <movies-list
          v-if="component.type === 'movies'"
          :key="component.id"
          :moviesList="component"
          class="develop"
        />
      </div>
    </draggable>
    <div class="add-buttons">
      <add-button @addComponent="newTitleComponent" componentType="Title" />
      <add-button @addComponent="newCardComponent" componentType="Cards" />
      <add-button @addComponent="newMoviesComponent" componentType="Movies" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TitleItem from './TitleItem.vue';
import CardSection from './CardSection.vue';
import MoviesList from './MoviesList.vue';
import draggable from 'vuedraggable';
import AddButton from './AddButton.vue';

export default {
  name: 'DevelopMode',
  components: {
    TitleItem,
    draggable,
    AddButton,
    CardSection,
    MoviesList,
  },
  computed: {
    ...mapGetters('contentStore', ['titleComponents', 'cardsComponents', 'allComponents']),
    isNotEmpty() {
      console.log(this.titleComponents);
      return Boolean(this.titleComponents.length);
    },
    componentsList: {
      get() {
        return this.allComponents;
      },
      set(keys) {
        this.dragComponents(keys);
      },
    },
  },
  methods: {
    ...mapActions('contentStore', ['addTitleComponent', 'addCardComponent', 'dragComponents', 'fetchMovies']),
    newTitleComponent() {
      this.addTitleComponent();
    },
    newCardComponent() {
      this.addCardComponent();
    },
    newMoviesComponent() {
      this.fetchMovies();
    },
  },
};
</script>

<style lang="scss" scoped>
  .develop {
    border: 1px solid gray;
    box-shadow: 0 .2rem .4rem rgba(black, .25);
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .handle {
    position: absolute;
    top: 2%;
    right: 1%;
    cursor: grab;
    padding: .5rem 1rem;
  }

  .component {
    position: relative;
  }

  .add-buttons {
    display: flex;
    justify-content: center;
    gap: .5rem;
  }
</style>
