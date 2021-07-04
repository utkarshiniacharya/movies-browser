<template>
  <div class="media-switch">
    <div :class="mediaTypeSelected === mediaTypes.movie ? 'active-media media-heading' : 'media-heading'" @click="changeMediaType(mediaTypes.movie)">
      Movies
      <div v-if="mediaTypeSelected === mediaTypes.movie" class="stroke" />
    </div>
    <div :class="mediaTypeSelected === mediaTypes.tv ? 'active-media media-heading' : 'media-heading'" @click="changeMediaType(mediaTypes.tv)">
      TV Shows
      <div v-if="mediaTypeSelected === mediaTypes.tv" class="stroke" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mediaTypes } from '~/constants/mediaTypes';

export default {
    data() {
        return {
            mediaTypes: mediaTypes,
        };
    },
    computed: {
        ...mapGetters(['mediaTypeSelected']),
    },
    methods: {
        ...mapActions(['changeSelectedMediaType']),
        changeMediaType(mediaType) {
            this.changeSelectedMediaType({ mediaType });
        },
    },
}
</script>

<style scoped>
.media-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
}
.media-heading {
    font-size: 2rem;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    cursor: pointer;
    opacity: 0.2;
}
.media-heading:hover {
    opacity: 1;
}
.active-media {
    opacity: 1;
}
.stroke {
    background-color: white;
    width: 2.5rem;
    height: 3px;
}
</style>