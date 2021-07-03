<template>
  <div class="container">
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
  </div>
</template>

<script>
import MovieCard from '~/components/MovieCard.vue';

export default {
  components: { MovieCard },

}
</script>

<style>
.container {
  display: flex;
  overflow-x: auto;
}
</style>