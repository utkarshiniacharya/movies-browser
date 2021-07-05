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
      <v-layout>
        <v-flex xs8 pt-1 pb-1>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            class="search-bar"
            label="Search"
            :dark="true"
            rounded
            solo
            pt-2
            clearable
            clear-icon="mdi-close"
            v-model="keyword"
            @keyup.enter="fetchSearchResults()"
          />
        </v-flex>
      </v-layout>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import Logo from './Logo';
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    fetchSearchResults() {
      if(this.keyword != '') {
        this.$router.push("/search-results/" + this.keyword);
      }
    }
  },
  components: { Logo },
}
</script>
<style scoped>
.action-bar {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.search-bar-container {
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 960px) {
  .action-bar {
    position: sticky;
  }
}
</style>