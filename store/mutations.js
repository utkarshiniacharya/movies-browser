import { mediaTypes } from '~/constants/mediaTypes';

export default {
    updateTrendingMedia( state, { data, mediaType }) {
        if(mediaType == mediaTypes.movie) {
            state.trendingMovies = data;
        }
        else {
            state.trendingTVShows = data;
        }
    }
};