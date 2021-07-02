import { mediaTypes } from '~/constants/mediaTypes';

export default {
    updateTrendingMedia(state, { data, mediaType }) {
        if(mediaType == mediaTypes.movie) {
            state.trendingMovies = data;
        }
        else {
            state.trendingTVShows = data;
        }
    },
    updateUpcomingMedia(state, { data }) {
        state.upcomingMovies = data;
    },
    updatePopularMedia(state, { data, mediaType }) {
        if(mediaType == mediaTypes.movie) {
            state.popularMovies = data;
        }
        else {
            state.popularTVShows = data;
        }
    },
    updateNowPlayingMedia(state, { data, mediaType }) {
        if(mediaType == mediaTypes.movie) {
            state.nowPlayingMovies = data;
        }
        else {
            state.nowPlayingTVShows = data;
        }
    },
    updateTopRatedMedia(state, { data, mediaType }) {
        if(mediaType == mediaTypes.movie) {
            state.topRatedMovies = data;
        }
        else {
            state.topRatedTVShows = data;
        }
    }
};