import { mediaTypes } from '~/constants/mediaTypes';

export default function() {
    return {
        mediaTypeSelected: mediaTypes.movie,
        trendingMovies: [],
        trendingTVShows: []
    };
};
