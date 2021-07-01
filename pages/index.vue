<template>
  <div>
    <backdrop-carousel />
    <type-heading text="Upcoming" />
    <type-heading text="Popular" />
    <type-heading text="Now Playing" />
    <type-heading text="Top Rated" />
    <movie-card />
  </div>
</template>

<script>
import MovieCard from '~/components/MovieCard';
import BackdropCarousel from '~/components/BackdropCarousel';
import TypeHeading from '~/components/TypeHeading.vue';

export default {
  components: {
    MovieCard,
    BackdropCarousel,
    TypeHeading
  },
  created() {
    // this.$axios
    //   .get("/3/movie/123?api_key=" + process.env.tmdbAPIKey)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));
  }
};
</script>
