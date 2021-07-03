<template>
  <div class="media-carousel">
    <v-btn fab>
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <div class="container" v-if="mediaTypeSelected == mediaTypes.movie">
      <div class="media-card" v-for="media in mediaList" :key="media.id">
        <media-card :card-title="media.original_title" :poster-path="media.poster_path" />
      </div>
    </div>
    <div class="container" v-else>
      <div class="media-card" v-for="media in mediaList" :key="media.id">
        <media-card :card-title="media.original_name" :poster-path="media.poster_path" />
      </div>
    </div>
    <v-btn fab>
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import MediaCard from '~/components/MediaCard';
import { mapGetters } from 'vuex';
import { mediaTypes } from '~/constants/mediaTypes';

export default {
  data() {
    return {
      mediaTypes: mediaTypes
    }
  },
  props: {
    mediaList: {
      type: Array,
      required: true,
      default: []
    }
  },
  components: { MediaCard },
  computed: {
    ...mapGetters(['mediaTypeSelected'])
  }
}
</script>

<style scoped>
.media-carousel {
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