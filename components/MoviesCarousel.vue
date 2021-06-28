<template>
  <v-carousel
    v-model="model"
    :hide-delimiters=true
    :cycle=true
    interval="3000"
    height="100vh"
  >
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      colors: ['priary', 'secondary','red', 'orange', 'yellow']
    }
  }
};
</script>
