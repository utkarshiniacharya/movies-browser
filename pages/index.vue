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
import { mapActions } from 'vuex';
import { mediaTypes } from '~/constants/mediaTypes';

export default {
  components: {
    MovieCard,
    BackdropCarousel,
    TypeHeading
  },
  methods: {
    ...mapActions(['fetchTrendingMedia'])
  },
  created() {
    this.fetchTrendingMedia({ mediaType: mediaTypes.movie });
    this.fetchTrendingMedia({ mediaType: mediaTypes.tv });
  }
};
</script>
