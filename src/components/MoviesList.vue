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
    <div class="search-wrap mb-4">
      <b-form class="search-field" @submit.stop.prevent="onSearchSubmit">
        <b-button variant="outline" @click="onReturn">
          <b-icon icon="arrow-return-left" variant="warning" />
        </b-button>
        <b-form-input
          v-model="keywords"
          aria-label="Input"
          class="mr-1"
          placeholder="Search"
        />
        <b-button type="submit" variant="outline-info">
          <b-icon icon="search" />
        </b-button>
      </b-form>
    </div>
    <b-row
      align-h="center"
      cols="2"
      cols-sm="2"
      cols-md="3"
      cols-lg="5"
    >
        <movie-item
          v-for="movie in correctMovies"
          :key="movie.id"
          :movie="movie"
        />
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MovieItem from './MovieItem.vue';

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
  data: () => ({
    keywords: '',
  }),
  computed: {
    correctMovies() {
      if (this.moviesList.searchMovies) return this.moviesList.searchMovies.movies;
      return this.moviesList.movies;
    },
  },
  methods: {
    ...mapActions('contentStore', ['deleteComponent', 'searchMovies', 'deleteMoviesSearch']),
    deleteItem() {
      this.deleteComponent(this.moviesList.id);
    },
    onSearchSubmit() {
      if (this.keywords) this.searchMovies([this.keywords, this.moviesList.id]);
    },
    onReturn() {
      if (this.moviesList.searchMovies) this.deleteMoviesSearch(this.moviesList.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-wrap {
  display: flex;
  justify-content: flex-end;
}
.search-field {
  display: flex;
  gap: .2rem;
}
</style>
