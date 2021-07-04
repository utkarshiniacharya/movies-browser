<template>
  <div class="media-details">
    <img :src="`${backDropURL}`" alt="" class="media-backdrop">
    <div class="media-backdrop-overlay">
    <h1 class="media-title">{{ title }}</h1>
    <h4 class="media-description">{{ description }}</h4>
    <p class="media-rating">{{ rating }} / 10</p>
    </div>
  </div>
</template>

<script>
import { mediaTypes } from '~/constants/mediaTypes';

export default {
  data() {
    return {
      title: null,
      description: null,
      genres: [],
      releaseDate: null,
      rating: null,
      languages: [],
      backDropURL: null,
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
                        for(var genre in response.data.genres) {
                          this.genres.push(genre.name);
                        }
                        this.releaseDate = response.data.release_date;
                        this.rating = response.data.vote_average;
                        for(var language in response.data.spoken_languages) {
                          this.languages.push(language.name);
                        }
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
.media-backdrop {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}
.media-backdrop-overlay {
  background-image: linear-gradient(to right, black, transparent, transparent);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 0 0 2rem;
}
.media-title {
  font-weight: 900;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.media-description {
  font-weight: 00;
  font-size: 1.5rem;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>