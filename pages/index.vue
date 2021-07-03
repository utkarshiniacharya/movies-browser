<template>
  <div>
    <backdrop-carousel />
    <carousel-heading
      carouselId="carousel1"
      v-if="mediaTypeSelected == mediaTypes.movie"
      text="Upcoming"
      :mediaList="upcomingMovies"
    />
    <carousel-heading
      carouselId="carousel2"
      v-if="mediaTypeSelected == mediaTypes.movie"
      text="Popular"
      :mediaList="popularMovies"
    />
    <carousel-heading
      carouselId="carousel3"
      v-else
      text="Popular"
      :mediaList="popularTVShows"
    />
    <carousel-heading
      carouselId="carousel4"
      v-if="mediaTypeSelected == mediaTypes.movie"
      text="Now Playing"
      :mediaList="nowPlayingMovies"
    />
    <carousel-heading
      carouselId="carousel5"
      v-else
      text="Now Playing"
      :mediaList="nowPlayingTVShows"
    />
    <carousel-heading
      carouselId="carousel6"
      v-if="mediaTypeSelected == mediaTypes.movie"
      text="Top Rated"
      :mediaList="topRatedMovies"
    />
    <carousel-heading
      carouselId="carousel7"
      v-else
      text="Top Rated"
      :mediaList="topRatedTVShows"
    />
  </div>
</template>

<script>
import BackdropCarousel from '~/components/BackdropCarousel';
import CarouselHeading from '~/components/CarouselHeading';
import { mapGetters, mapActions } from 'vuex';
import { mediaTypes } from '~/constants/mediaTypes';

export default {
  data() {
    return {
      mediaTypes: mediaTypes
    }
  },
  components: {
    BackdropCarousel,
    CarouselHeading
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
  },
  computed: {
    ...mapGetters(['mediaTypeSelected', 'upcomingMovies', 'popularMovies', 'popularTVShows', 'nowPlayingMovies', 'nowPlayingTVShows', 'topRatedMovies', 'topRatedTVShows'])
  }
};
</script>
