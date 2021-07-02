import { mediaTypes } from '~/constants/mediaTypes';

export default function() {
    return {
        mediaTypeSelected: mediaTypes.tv,
        trendingMovies: [],
        trendingTVShows: [],
        upcomingMovies: [],
        popularMovies: [],
        popularTVShows: [],
        nowPlayingMovies: [],
        nowPlayingTVShows: [],
        topRatedMovies: [],
        topRatedTVShows: []
    };
};
