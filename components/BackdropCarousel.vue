<template>
  <div>
    <v-carousel
      v-model="model"
      :hide-delimiters=true
      :cycle=true
      interval="3000"
      height="100vh"
      :show-arrows=false
      v-if="mediaTypeSelected == mediaTypes.movie"
    >
      <v-carousel-item v-for="movie in trendingMovies" :key="movie.id">
        <img :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" alt="" class="backdrop">
        <div class="backdrop-overlay">
          <h2 class="trending-heading">Trending</h2>
          <h1 class="backdrop-name">{{ movie.original_title }}</h1>
          <p class="backdrop-rating">{{ movie.vote_average }} / 10</p>
          <button class="view-btn">
            View More
          </button>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mediaTypes } from '~/constants/mediaTypes';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      model: 0,
      colors: ['red', 'green'],
      trendingMedia: [],
      mediaTypes: mediaTypes
    }
  },
  computed: {
    ...mapGetters(['mediaTypeSelected', 'trendingMovies'])
  }
};
</script>
<style scoped>
.backdrop {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}
.backdrop-overlay {
  background-image: linear-gradient(to right, black, transparent, transparent);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 0 0 2rem;
}
.backdrop-name {
  font-weight: 900;
  font-size: 3.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.view-btn {
  background-color: white;
  color: black;
  padding: 0.6rem 3rem;
  font-weight: 800;
  letter-spacing: 3px;
}
@media only screen and (max-width: 960px) {
  .backdrop {
    height: unset;
  }
  .backdrop-overlay {
    height: unset;
  }
  .trending-heading {
    font-size: 1rem;
  }
  .backdrop-name {
    font-size: 2rem;
  }
  .view-btn {
    padding: 0.3rem 1.5rem;
    font-weight: 800;
    letter-spacing: 1px;
  }
}
</style>
