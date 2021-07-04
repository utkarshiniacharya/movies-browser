<template>
  <div class="media-details">
    <img :src="backDropURL" alt="" class="media-backdrop">
    <div class="media-backdrop-overlay">
      <h1 class="media-title">{{ title }}</h1>
      <div class="media-genres">
        <span
          v-for="genre in genres" :key="genre"
        >
          <v-chip
            class="ma-2"
            color="purple accent-2"
            label
            outlined
          >
            {{ genre }}
          </v-chip>
          &nbsp;
        </span>
      </div>
      <br>
      <p class="media-rating">{{ rating }} / 10</p>
      <p class="media-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { mediaTypes } from '~/constants/mediaTypes';

export default {
  data() {
    return {
      title: '',
      description: '',
      genres: [],
      rating: '',
      backDropURL: '',
      mediaTypes: mediaTypes
    }
  },
  methods: {
      fetchMediaDetails() {
        return new Promise((resolve, reject) => {
            this.$axios.get("/3/" + this.$route.params.mediaType + "/" + this.$route.params.id + "?api_key=" + process.env.tmdbAPIKey + "&language=en-US&page=1")
                .then(response => {
                    if(this.$route.params.mediaType == this.mediaTypes.movie) {
                        this.title = response.data.original_title;
                        this.description = response.data.overview;
                        for(var index in response.data.genres) {
                          this.genres.push(response.data.genres[index].name);
                        }
                        this.rating = response.data.vote_average;
                        this.backDropURL = "https://image.tmdb.org/t/p/original" + response.data.backdrop_path;
                        this.posterPath = "https://image.tmdb.org/t/p/original" + response.data.poster_path;
                    }
                    else {

                    }
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
      }
  },
  created() {
    this.fetchMediaDetails();
  }
}
</script>

<style scoped>
.media-details {
    position: relative;
    z-index: 0;
}
.media-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    opacity: 0.6;
    width: 100%;
    object-fit: cover;
    z-index: -5;
}
.media-backdrop-overlay {
    background-image: linear-gradient(to right, black, black, transparent, transparent);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem 0 4rem;
}
.media-title {
    font-weight: 900;
    font-size: 3.5rem;
}
.media-description {
    max-width: 900px;
}
.media-genres {
    font-weight: 600;
}
@media only screen and (max-width: 960px) {
    .media-backdrop-overlay {
        padding: 1rem;
    }
}
</style>