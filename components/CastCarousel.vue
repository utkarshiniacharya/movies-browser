<template>
  <div class="cast-carousel">
    <v-btn fab @click="handleScroll('left')">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <div class="container" :id="carouselId">
      <div class="cast-card" v-for="cast in castList" :key="cast.id">
        <div class="card">
          <img :src="`https://image.tmdb.org/t/p/original${profile_path}`" alt="No image available." class="poster">
          <h3 class="cast-name">{{ cast.original_name }}</h3>
        </div>
      </div>
    </div>
    <v-btn fab @click="handleScroll('right')">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    castList: {
      type: Array,
      required: true,
      default: []
    },
    carouselId: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    handleScroll(direction) {
      if(direction === 'left') {
        document.getElementById(this.carouselId).scrollLeft -= 300;
      }
      else if(direction === 'right') {
        document.getElementById(this.carouselId).scrollLeft += 300;
      }
    }
  },
  computed: {
    ...mapGetters(['mediaTypeSelected'])
  }
}
</script>

<style scoped>
.cast-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  margin: auto;
}
.container {
  display: flex;
  margin: 2rem 1rem;
  overflow-x: auto;
  max-width: 100%;
}
.container::-webkit-scrollbar {
    display: none;
}
</style>