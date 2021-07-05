<template>
  <div class="search-results" >
      <div class="" v-for="result in searchResults" :key="result">
        {{ result.name }}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchResults: []
        }
    },
    methods: {
        fetchSearchResults() {
            return new Promise((resolve, reject) => {
                this.$axios.get("3/search/multi?api_key=" + process.env.tmdbAPIKey + "&language=en-US&query=" + this.$route.params.keyword)
                    .then(response => {
                        this.searchResults = response.data.results;
                        resolve(response.data)
                    })
                    .catch(error => {
                        reject(error)
                    })
            });
        }
    },
    created() {
        this.fetchSearchResults();
    }
}
</script>

<style>

</style>