<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="mb-5">
      <div class="container">
        <b-navbar-brand href="#">Construct your Site</b-navbar-brand>
      </div>
    </b-navbar>
    <div class="container">
      <simple-section />
      <card-section />
    </div>
  </div>
</template>

<script>
import SimpleSection from './components/SimpleSection.vue';
import CardSection from './components/CardSection.vue';

export default {
  name: 'App',
  components: {
    SimpleSection,
    CardSection,
  },
};
</script>

<style lang="scss">
body {
  background-color: #f8f9fa;
}

#app {
  margin: 0 auto;
  text-align: center;
}

.container {
  max-width: 800px;
}
</style>
