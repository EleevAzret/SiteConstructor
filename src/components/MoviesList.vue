<template>
  <div class="movies-list">
    <div class="settings">
      <b-button
        v-if="isDevelop"
        @click="deleteItem"
        variant="outline-danger"
        size="sm"
        class="mb-2"
      >
        <b-icon icon="x-lg" aria-hidden="true" />
      </b-button>
    </div>
    <b-row cols="5">
        <movie-item 
          v-for="movie in moviesList.movies"
          :key="movie.id"
          :movie="movie"
        />
    </b-row>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';
import { mapActions } from 'vuex';

export default {
  name: 'MoviesList',
  components: {
    MovieItem,
  },
  props: {
    moviesList: {
      type: Object,
      default: () => ({}),
    },
    isDevelop: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    ...mapActions('contentStore', ['deleteComponent']),
    deleteItem() {
      this.deleteComponent(this.moviesList.id);
    },
  },
};
</script>
