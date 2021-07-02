import { mediaTypes } from "~/constants/mediaTypes";

export default {
    fetchTrendingMedia({ commit }, { mediaType }) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/3/trending/" + mediaType + "/week?api_key=" + process.env.tmdbAPIKey)
                .then(response => {
                    commit("updateTrendingMedia", { data: response.data.results, mediaType })
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    fetchUpcomingMedia({ commit }, { mediaType }) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/3/" + mediaType + "/upcoming?api_key=" + process.env.tmdbAPIKey + "&language=en-US&page=1")
                .then(response => {
                    commit("updateUpcomingMedia", { data: response.data.results })
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    fetchPopularMedia({ commit }, { mediaType }) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/3/" + mediaType + "/popular?api_key=" + process.env.tmdbAPIKey + "&language=en-US&page=1")
                .then(response => {
                    commit("updatePopularMedia", { data: response.data.results, mediaType })
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    fetchNowPlayingMedia({ commit }, { mediaType }) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/3/" + mediaType + `/${mediaType == mediaTypes.movie ? 'now_playing' : 'airing_today'}?api_key=` + process.env.tmdbAPIKey + "&language=en-US&page=1")
                .then(response => {
                    commit("updateNowPlayingMedia", { data: response.data.results, mediaType })
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    fetchTopRatedMedia({ commit }, { mediaType }) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/3/" + mediaType + "/top_rated?api_key=" + process.env.tmdbAPIKey + "&language=en-US&page=1")
                .then(response => {
                    commit("updateTopRatedMedia", { data: response.data.results, mediaType })
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    }
};