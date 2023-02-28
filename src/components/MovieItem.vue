<template>
  <b-col>
    <div class="movie-item">
      <img
        :src="movie.poster_path"
        :alt="movie.original_title"
        class="movie-item__poster"
      />
      <div class="movie-item__wrap">
        <div class="movie-item__info">
          <h5 class="movie-item__title">
            {{ movie.title }}
          </h5>
          <span class="movie-item__year">{{ movie.release_date }}</span>
        </div>
        <div class="movie-item__rating">
          <b-icon icon="star" />
          {{ movie.vote_average }}
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
  .movie-item {
    position: relative;
    cursor: pointer;
    border-radius: .7rem;
    transition: all .2s ease-in;
    overflow: hidden;
    height: 22rem;
    box-shadow: 0 .4rem .4rem rgba(#000, .25);

    @media (max-width: 575.98px) {
      height: 20rem;
      width: 10rem;
    }

    &:hover {
      box-shadow: 0 0 1rem rgba(#000, .75);
      transform: scale(1.02);
    }

    &__poster {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }

    &__wrap {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      opacity: 0;
      transition: all .2s ease;
      background-color: rgba(#000, .5);
      letter-spacing: .05rem;
      color: #fff;
      text-shadow: 0 0 .2rem rgba(#000, 5);

      @media (max-width: 767.98px) {
        opacity: 1;
      }

      &:hover {
        opacity: 1;
      }
    }

    &__title {
      font-size: 1.6rem;

      @media (max-width: 575.98px) {
        font-size: 1rem;
      }
    }
}
</style>
