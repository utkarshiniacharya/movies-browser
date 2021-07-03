<template>
  <div>
    <backdrop-carousel />
    <type-heading text="Upcoming" />
    <type-heading text="Popular" />
    <type-heading text="Now Playing" />
    <type-heading text="Top Rated" />
  </div>
</template>

<script>
import BackdropCarousel from '~/components/BackdropCarousel';
import TypeHeading from '~/components/TypeHeading.vue';
import { mapActions } from 'vuex';
import { mediaTypes } from '~/constants/mediaTypes';

export default {
  components: {
    BackdropCarousel,
    TypeHeading
  },
  methods: {
    ...mapActions(['fetchTrendingMedia', 'fetchUpcomingMedia', 'fetchPopularMedia', 'fetchNowPlayingMedia', 'fetchTopRatedMedia'])
  },
  created() {
    this.fetchTrendingMedia({ mediaType: mediaTypes.movie });
    this.fetchTrendingMedia({ mediaType: mediaTypes.tv });
    this.fetchUpcomingMedia({ mediaType: mediaTypes.movie });
    this.fetchPopularMedia({ mediaType: mediaTypes.movie });
    this.fetchPopularMedia({ mediaType: mediaTypes.tv });
    this.fetchTopRatedMedia({ mediaType: mediaTypes.movie });
    this.fetchTopRatedMedia({ mediaType: mediaTypes.tv });
    this.fetchNowPlayingMedia({ mediaType: mediaTypes.movie });
    this.fetchNowPlayingMedia({ mediaType: mediaTypes.tv });
  }
};
</script>
