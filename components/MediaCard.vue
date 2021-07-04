<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/original${posterPath}`" alt="No image available." class="poster" v-if="posterPath !== null">
        <div class="null-poster" v-else />
        <h3 class="media-name">{{ cardTitle}}</h3>
        <p class="release-date">{{ releaseDate }}</p>
    </div>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      required: true,
      default: 'Title'
    },
    posterPath: {
      required: true,
      default: ''
    },
    releaseDate: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>


<style scoped>
.card {
    margin: 0.5rem;
    width: 170px;
}
.poster {
    border-radius: 5%;
    height: 250px;
    width: 170px;
    z-index: -1;
    object-fit: cover;
}
.media-name {
  font-weight: 600;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.null-poster {
  border-radius: 5%;
  height: 250px;
  width: 170px;
  background-color: gray;
  opacity: 0.3;
}
</style>