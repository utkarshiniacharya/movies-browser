<template>
  <div>
    <v-carousel
      v-model="model"
      :hide-delimiters=true
      :cycle=true
      interval="4000"
      height="100vh"
      :show-arrows=false
      v-if="mediaTypeSelected == mediaTypes.movie"
    >
      <v-carousel-item v-for="movie in trendingMovies" :key="movie.id">
        <img :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" alt="" class="backdrop">
        <div class="backdrop-overlay">
          <h2 class="trending-heading">Trending</h2>
          <h1 class="backdrop-name">{{ movie.original_title }}</h1>
          <v-rating
            class="media-rating"
            background-color="warning lighten-1"
            color="warning"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            half-increments
            length="5"
            readonly
            size="15"
            :value="movie.vote_average / 2"
            :dense="true"
          />
          <br/>
          <p class="media-description">{{ movie.overview }}</p>
          <br />
          <NuxtLink :to="'/' + mediaTypes.movie + '/' + movie.id">
            <button class="view-btn">
              View More
            </button>
          </NuxtLink>
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      v-model="model"
      :hide-delimiters=true
      :cycle=true
      interval="4000"
      height="100vh"
      :show-arrows=false
      v-else
    >
      <v-carousel-item v-for="tvshow in trendingTVShows" :key="tvshow.id">
        <img :src="`https://image.tmdb.org/t/p/original${tvshow.backdrop_path}`" alt="" class="backdrop">
        <div class="backdrop-overlay">
          <h2 class="trending-heading">Trending</h2>
          <h1 class="backdrop-name">{{ tvshow.original_name }}</h1>
          <v-rating
            class="media-rating"
            background-color="warning lighten-1"
            color="warning"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            half-increments
            length="5"
            readonly
            size="15"
            :value="tvshow.vote_average / 2"
            :dense="true"
          />
          <br/>
          <p class="media-description">{{ tvshow.overview }}</p>
          <br />
          <NuxtLink :to="'/' + mediaTypes.tv + '/' + tvshow.id">
            <button class="view-btn">
              View More
            </button>
          </NuxtLink>
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
      mediaTypes: mediaTypes
    }
  },
  computed: {
    ...mapGetters(['mediaTypeSelected', 'trendingMovies', 'trendingTVShows'])
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
.media-description {
  display: none;
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
    position: unset;
    margin-bottom: 2rem;
  }
  .backdrop-overlay {
    background-image: unset;
    height: unset;
    padding: 1rem;
  }
  .media-description {
    display: unset;
  }
  .trending-heading {
    font-size: 1rem;
  }
  .backdrop-name {
    white-space: unset;
    overflow: unset;
    text-overflow: unset;
    font-size: 1.5rem;
  }
  .view-btn {
    padding: 0.3rem 1.5rem;
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
}
</style>
