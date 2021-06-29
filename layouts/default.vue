<template>
  <v-app>
   <action-bar />
   <Nuxt />
  </v-app>
</template>

<script>
import ActionBar from '~/components/ActionBar.vue'
export default {
  components: { ActionBar },
}
</script>
