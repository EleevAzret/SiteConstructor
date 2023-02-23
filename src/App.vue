<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="mb-5">
      <b-container fluid="md">
        <b-navbar-brand href="#">Construct your Site</b-navbar-brand>
      </b-container>
    </b-navbar>
    <b-container fluid="md">
      <title-section />
      <card-section />
    </b-container>
  </div>
</template>

<script>
import TitleSection from './components/TitleSection.vue';
import CardSection from './components/CardSection.vue';

export default {
  name: 'App',
  components: {
    TitleSection,
    CardSection,
  },
};
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  text-align: center;
}

.container {
  max-width: 800px;
}
</style>
