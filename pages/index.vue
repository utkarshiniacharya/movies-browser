<template>
  <MovieCard />
</template>

<script>
import MovieCard from "~/components/MovieCard";

export default {
  components: {
    MovieCard
  },
  created() {
    // this.$axios
    //   .get("/3/movie/123?api_key=" + process.env.tmdbAPIKey)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));
  }
};
</script>
