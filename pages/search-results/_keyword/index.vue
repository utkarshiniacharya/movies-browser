<template>
    <div class="search-results">
        <h2 class="search-results-heading">Search Results for {{ this.$route.params.keyword }}</h2>
            <div class="search-carousel">
                <v-btn fab @click="handleScroll('left')">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <div class="container" :id="carouselId">
                    <div class="" v-for="result in searchResults" :key="result.id">
                        <media-card
                            v-if="result.media_type === 'movie'"
                            :card-title="result.original_title"
                            :poster-path="result.poster_path"
                            :release-date="result.release_date"
                            :mediaId="result.id"
                            :mediaType="mediaTypes.movie"
                        />
                        <media-card
                            v-else-if="result.media_type === 'tv'"
                            :card-title="result.original_name"
                            :poster-path="result.poster_path"
                            :release-date="result.first_air_date"
                            :mediaId="result.id"
                            :mediaType="mediaTypes.tv"
                        />
                        <cast-card
                            v-else
                            :personId="result.id"
                            :posterPath="result.profile_path"
                            :personName="result.name"
                        />
                    </div>
                </div>
                <v-btn fab @click="handleScroll('right')">
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
        </div>
    </div>
</template>

<script>
import CastCard from '~/components/CastCard.vue';
import MediaCard from '~/components/MediaCard.vue';
import { mediaTypes } from '~/constants/mediaTypes';

export default {
  components: { MediaCard, CastCard },
    data() {
        return {
            searchResults: [],
            mediaTypes: mediaTypes,
            carouselId: 'search-result-carousel-id'
        }
    },
    methods: {
        fetchSearchResults() {
            return new Promise((resolve, reject) => {
                this.$axios.get("3/search/multi?api_key=" + process.env.tmdbAPIKey + "&language=en-US&query=" + this.$route.params.keyword)
                    .then(response => {
                        this.searchResults = response.data.results;
                        resolve(response.data)
                    })
                    .catch(error => {
                        reject(error)
                    })
            });
        },
        handleScroll(direction) {
            if(direction === 'left') {
                document.getElementById(this.carouselId).scrollLeft -= 300;
            }
            else if(direction === 'right') {
                document.getElementById(this.carouselId).scrollLeft += 300;
            }
        }
    },
    created() {
        this.fetchSearchResults();
    }
}
</script>

<style scoped>
.search-results {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.search-results-heading {
    margin-top: 8rem;
}
.search-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  margin: auto;
}
.container {
  display: flex;
  margin: 2rem 1rem;
  overflow-x: auto;
  max-width: 100%;
}
.container::-webkit-scrollbar {
    display: none;
}
.search-results-heading {
    text-align: center;
}
</style>