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
        :value="rating"
        :dense="true"
      />
    </div>
    <div class="more-details">
      <h1 class="heading-name">Summary</h1>
      <div class="name-stroke" />
        <p class="media-description">{{ description }}</p>
      <cast-carousel carouselId="cast-carousel-id" :castList="castList"/>
    </div>
  </div>
</template>

<script>
import CastCarousel from '~/components/CastCarousel.vue';
import { mediaTypes } from '~/constants/mediaTypes';

export default {
  data() {
    return {
      title: '',
      description: '',
      genres: [],
      rating: 0,
      backDropURL: '',
      mediaTypes: mediaTypes,
      castList: []
    }
  },
  components: {
    CastCarousel
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
                        this.rating = response.data.vote_average / 2;
                        this.backDropURL = "https://image.tmdb.org/t/p/original" + response.data.backdrop_path;
                    }
                    else {

                    }
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
      },
      fetchCastDetails() {
        return new Promise((resolve, reject) => {
          this.$axios.get("/3/" + this.$route.params.mediaType + "/" + this.$route.params.id + "/credits?api_key=" + process.env.tmdbAPIKey + "&language=en-US&page=1")
            .then(response => {
              this.castList = response.data.cast;
              resolve(response.data);
            })
            .catch(error => {
              reject(error)
            })
        });
      }
  },
  created() {
    this.fetchMediaDetails();
    this.fetchCastDetails();
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
    opacity: 0.3;
    width: 100%;
    object-fit: cover;
    z-index: -5;
}
.media-backdrop-overlay {
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
    margin: 3rem 1rem;
    max-width: 900px;
    text-align: justify;
}
.media-genres {
    font-weight: 600;
}
.more-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
}
.name-stroke {
  background-color: white;
  width: 2.5rem;
  height: 5px;
}
@media only screen and (max-width: 960px) {
    .media-backdrop-overlay {
        padding: 1rem;
    }
    .media-title {
        font-size: 2.5rem
    }
}
</style>