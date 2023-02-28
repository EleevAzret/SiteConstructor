<template>
  <div class="dev-mode">
    <draggable v-model="componentsList" :animation="300" handle=".handle" key="drag">
      <transition-group name="fade">
        <div class="component" v-for="component in componentsList" :key="component.id">
          <div class="handle" key="icon">
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
      </transition-group>
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
import draggable from 'vuedraggable';
import TitleItem from './TitleItem.vue';
import CardSection from './CardSection.vue';
import MoviesList from './MoviesList.vue';
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
    ...mapGetters('contentStore', ['allComponents']),
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
    position: relative;
    display: flex;
    justify-content: center;
    gap: .5rem;
  }

  .fade-enter-active, .fade-leave-active, .fade-move {
    transition: all .5s ease-out;
  }

  .fade-enter, .fade-leave-to {
    transform: scale(0);
    z-index: -10;
    opacity: 0;
    height: 0;
  }
</style>
