<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="mb-5">
      <b-container fluid="sm">
        <b-navbar-brand href="#">Construct your Site</b-navbar-brand>
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
    <b-container fluid="sm">
      <develop-mode v-if="isDevMode" />
      <template v-else>
        <div class="component" v-for="component in componentsList" :key="component.id">
          <title-item
            v-if="component.type === 'titleComponent'"
            :key="component.id"
            :titleContent="component"
            :isDevelop="isDevMode"
            class="develop"
          />
          <card-section
            v-if="component.type === 'cardComponent'"
            :key="component.id"
            :cardComponent="component"
            :isDevelop="isDevMode"
            class="develop"
          />
        </div>
      </template>
    </b-container>
  </div>
</template>

<script>
import CardSection from './components/CardSection.vue';
import TitleItem from './components/TitleItem.vue';
import DevelopMode from './components/DevelopMode.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    CardSection,
    TitleItem,
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
      return this.allComponents;
    },
  },
};
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  text-align: center;
}

#btn-radios-2_BV_option_0, #btn-radios-2_BV_option_1 {
  display: none;
}
</style>
