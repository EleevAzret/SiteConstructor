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
    <div class="search-wrap mb-3">
      <b-form class="search-field" @submit.stop.prevent="onSearchSubmit">
        <b-form-input v-model="keywords" aria-label="Input" class="mr-1"></b-form-input>
        <b-button type="submit" variant="outline-info">
          <b-icon icon="search" />
        </b-button>
      </b-form>
    </div>
    <b-row cols="5">
        <movie-item 
          v-for="movie in correctMovies"
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
  data: () => ({
    keywords: '',
  }),
  computed: {
    correctMovies() {
      return this.moviesList.searchMovies ? this.moviesList.searchMovies.movies : this.moviesList.movies;
    },
  },
  methods: {
    ...mapActions('contentStore', ['deleteComponent', 'searchMovies']),
    deleteItem() {
      this.deleteComponent(this.moviesList.id);
    },
    onSearchSubmit(e) {
      if (this.keywords) this.searchMovies([this.keywords, this.moviesList.id]);
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
