<template>
  <div class="card">
    <NuxtLink :to="'/person/' + personId">
        <img :src="`https://image.tmdb.org/t/p/original${posterPath}`" alt="No image available." class="poster" v-if="posterPath !== null">
        <div class="null-poster" v-else />
    </NuxtLink>
    <h3 class="cast-name">{{ personName }}</h3>
  </div>
</template>

<script>
export default {
    props: {
        personId:{
            type: Number,
            required: true,
            default: 0
        },
        posterPath: {
            required: true,
            default: ''
        },
        personName: {
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
.cast-name {
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