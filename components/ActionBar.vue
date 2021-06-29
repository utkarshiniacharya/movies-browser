<template>
  <v-app-bar
    :fixed="true"
    color="rgba(0, 0, 0, 0.5)"
  >
    <v-toolbar-title>
      <logo />
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-text-field
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
import Logo from './Logo.vue';
export default {
  components: { Logo },

}
</script>
<style>
.search-bar .v-input__control{
  margin-top: 8px;
}
</style>