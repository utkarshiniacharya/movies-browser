<template>
  <div>
    <BackdropCarousel />
    <MovieCard />
  </div>
</template>

<script>
import MovieCard from "~/components/MovieCard";
import BackdropCarousel from "~/components/BackdropCarousel";

export default {
  components: {
    MovieCard,
    BackdropCarousel
  },
  created() {
    // this.$axios
    //   .get("/3/movie/123?api_key=" + process.env.tmdbAPIKey)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));
  }
};
</script>
