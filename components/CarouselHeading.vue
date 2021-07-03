<template>
  <div class="heading-type">
      <h1 class="heading-name">
          {{ text }}
      </h1>
      <div class="name-stroke" />
      <v-spacer />
      <media-carousel :media-list="mediaList"/>
  </div>
</template>

<script>
import MediaCarousel from './MediaCarousel';

export default {
  props: {
    text: {
      type: String,
      required: true,
      default: 'Heading'
    },
    mediaList: {
      type: Array,
      required: true,
      default: []
    }
  },
  components: { MediaCarousel }
}
</script>
<style scoped>
.heading-type {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
}
.name-stroke {
  background-color: white;
  width: 2.5rem;
  height: 4px;
}
</style>