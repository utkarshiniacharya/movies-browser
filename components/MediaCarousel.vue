<template>
  <div>
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
.container {
  display: flex;
  overflow-x: auto;
}
.container::-webkit-scrollbar {
    display: none;
}
</style>