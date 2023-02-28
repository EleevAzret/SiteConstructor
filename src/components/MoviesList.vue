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
      v-if="searchIsNotEmpty"
    >
      <movie-item
        v-for="movie in correctMovies"
        :key="movie.id"
        :movie="movie"
      />
    </b-row>
    <div class="empty" v-else>
      <img :src="emptySrc" alt="empty">
    </div>
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
    emptySrc: 'https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?w=1380&t=st=1677606834~exp=1677607434~hmac=a9b313ff8671f6fe742e7a34f8c749f0486b6c89a339a0360b0684f06f598271',
  }),
  computed: {
    correctMovies() {
      if (this.moviesList.searchMovies) return this.moviesList.searchMovies.movies;
      return this.moviesList.movies;
    },
    searchIsNotEmpty() {
      if (this.moviesList.searchMovies) {
        return Boolean(Object.keys(this.moviesList.searchMovies.movies).length)
      }
      return true;
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

.empty {
  & > img {
    width: 20rem;
    height: 20rem;
  }
}
</style>
