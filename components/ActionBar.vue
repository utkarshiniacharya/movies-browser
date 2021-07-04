<template>
  <v-app-bar
    :fixed="true"
    color="rgba(0, 0, 0, 0.4)"
    class="action-bar"
  >
    <v-toolbar-title>
      <logo />
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-text-field
        append-icon="mdi-magnify"
        class="search-bar"
        label="Search by name"
        :dark="true"
        flat
        solo
      />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import Logo from './Logo';
export default {
  components: { Logo },

}
</script>
<style scoped>
.action-bar {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.search-bar .v-input__control{
  margin-top: 8px;
}
@media only screen and (max-width: 960px) {
  .action-bar {
    position: sticky;
  }
}
</style>