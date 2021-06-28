<template>
  <button @click="fetchData">fetch</button>
</template>

<script>
export default {
  created() {
    this.$axios
      .get("/3/movie/123?api_key=" + process.env.tmdbAPIKey)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
};
</script>
