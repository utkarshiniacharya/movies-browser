export default {
    fetchTrendingMedia({ commit}, { mediaType }) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/3/trending/" + mediaType + "/week?api_key=" + process.env.tmdbAPIKey)
                .then(response => {
                    commit("updateTrendingMedia", { data: response.data.results, mediaType: mediaType })
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    }
};