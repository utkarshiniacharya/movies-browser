<template>
  <div>
    <Movies-Carousel />
    <MovieCard />
  </div>
</template>

<script>
import MovieCard from "~/components/MovieCard";
import MoviesCarousel from '~/components/MoviesCarousel';

export default {
  components: {
    MovieCard,
    MoviesCarousel
  },
  created() {
    // this.$axios
    //   .get("/3/movie/123?api_key=" + process.env.tmdbAPIKey)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));
  }
};
</script>
