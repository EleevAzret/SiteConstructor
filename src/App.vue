<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="mb-5">
      <b-container fluid="lg">
        <b-navbar-brand href="#">
          <img src="./img/logo.png" alt="logo" class="logo">
        </b-navbar-brand>
        <b-form-radio-group
          id="btn-radios-2"
          v-model="isDevMode"
          :options="options"
          button-variant="outline-info"
          size="sm"
          name="radio-btn-outline"
          buttons
        ></b-form-radio-group>
      </b-container>
    </b-navbar>
    <b-container fluid="lg">
      <develop-mode v-if="isDevMode" />
      <template v-else>
        <div class="component mb-5" v-for="component in componentsList" :key="component.id">
          <title-item
            v-if="component.type === 'titleComponent'"
            :key="component.id"
            :titleContent="component"
            :isDevelop="isDevMode"
          />
          <card-section
            v-if="component.type === 'cardComponent'"
            :key="component.id"
            :cardComponent="component"
            :isDevelop="isDevMode"
          />
          <movies-list
            v-if="component.type === 'movies'"
            :key="component.id"
            :moviesList="component"
            :isDevelop="isDevMode"
          />
        </div>
      </template>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardSection from './components/CardSection.vue';
import TitleItem from './components/TitleItem.vue';
import MoviesList from './components/MoviesList.vue';
import DevelopMode from './components/DevelopMode.vue';

export default {
  name: 'App',
  components: {
    CardSection,
    TitleItem,
    MoviesList,
    DevelopMode,
  },
  data: () => ({
    isDevMode: true,
    options: [
      { text: 'Develop', value: true },
      { text: 'View', value: false },
    ],
  }),
  computed: {
    ...mapGetters('contentStore', ['allComponents']),
    componentsList() {
      console.log(this.allComponents);
      return this.allComponents;
    },
  },
};
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  text-align: center;
  padding-bottom: 2rem;
}

#btn-radios-2_BV_option_0, #btn-radios-2_BV_option_1 {
  display: none;
}

.logo {
  width: 7rem;
  height: auto;
}
</style>
