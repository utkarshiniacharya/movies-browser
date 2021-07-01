<template>
  <v-container>
    <v-carousel
      v-model="model"
      :hide-delimiters=true
      :cycle=true
      interval="3000"
      height="100vh"
      :show-arrows=false
      v-if="mediaTypeSelected == mediaTypes.movie"
    >
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        Movies
        {{ i }}
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      v-model="model"
      :hide-delimiters=true
      :cycle=true
      interval="3000"
      height="100vh"
      :show-arrows=false
      v-if="mediaTypeSelected == mediaTypes.tv"
    >
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        TV
        {{ i }}
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import { mediaTypes } from '~/constants/mediaTypes';
import {mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      model: 0,
      colors: ['red', 'green'],
      trendingMedia: [],
      mediaTypes: mediaTypes
    }
  },
  computed: {
    ...mapGetters(['mediaTypeSelected'])
  }
};
</script>
