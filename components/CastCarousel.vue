<template>
  <div class="cast-carousel">
    <v-btn fab @click="handleScroll('left')">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <div class="container" :id="carouselId">
      <div class="card" v-for="cast in castList" :key="cast.id">
        <cast-card
          :personId="cast.id"
          :posterPath="cast.profile_path"
          :personName="cast.original_name"
        />
      </div>
    </div>
    <v-btn fab @click="handleScroll('right')">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CastCard from './CastCard.vue';

export default {
  components: { CastCard },
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
.card {
    margin: 0.5rem;
    width: 170px;
}
.poster {
    border-radius: 5%;
    height: 250px;
    width: 170px;
    object-fit: cover;
}
.null-poster {
    border-radius: 5%;
    height: 250px;
    width: 170px;
    background-color: gray;
    opacity: 0.3;
}
.cast-name {
  font-weight: 600;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>