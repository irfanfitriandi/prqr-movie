export const API = {
  MOVIES: {
    GET_MOVIE_POPULAR: '/movie/popular',
    GET_MOVIE_NOW_PLAYING: '/movie/now_playing',
    GET_MOVIE_TOP_RATED: '/movie/top_rated',
    GET_MOVIE_UPCOMING: '/movie/upcoming',
    GET_MOVIE: (id: string) => `/movie/${id}`,
    GET_MOVIE_CREDITS: (id: string) => `/movie/${id}/credits`,
    GET_MOVIE_REVIEWS: (id: string) => `/movie/${id}/reviews`,
    GET_MOVIE_TRENDING: (time: 'day' | 'week') => `/trending/movie/${time}`,
    GET_MOVIE_IMAGES: (id: string) => `/movie/${id}/images`,
    GET_MOVIE_VIDEOS: (id: string) => `/movie/${id}/videos`,
    GET_MOVIE_SIMILAR: (id: string) => `/movie/${id}/similar`,
    GET_MOVIE_KEYWORDS: (id: string) => `/movie/${id}/keywords`,
    GET_MOVIE_RATING: (id: string) => `/movie/${id}/rating`,
    GET_MOVIE_RECOMMENDATIONS: (id: string) => `/movie/${id}/recommendations`,
  },

  TV: {
    GET_TV_POPULAR: '/tv/popular',
    GET_TV_ON_AIR: '/tv/on_the_air',
    GET_TV_AIRING_TODAY: '/tv/airing_today',
    GET_SEARCH_TV: '/search/tv/',
    GET_TV: (id: string) => `/tv/${id}`,
    GET_TV_CREDITS: (id: string) => `/tv/${id}/credits`,
    GET_TV_REVIEWS: (id: string) => `/tv/${id}/reviews`,
    GET_TV_SEASON: (id: string, seasonNumber: number) =>
      `/tv/${id}/season/${seasonNumber}`,
    GET_TV_EPISODE: (id: string, seasonNumber: number, episodeNumber: number) =>
      `/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}`,
    GET_TV_VIDEOS: (id: string) => `/tv/${id}/videos`,
    GET_TV_IMAGES: (id: string) => `/tv/${id}/images`,
    GET_TV_SIMILAR: (id: string) => `/tv/${id}/similar`,
    GET_TV_KEYWORDS: (id: string) => `/tv/${id}/keywords`,
    GET_TV_RECOMMENDATIONS: (id: string) => `/tv/${id}/recommendations`,
  },

  PEOPLE: {
    GET_PERSON: (id: string) => `/person/${id}`,
    GET_PERSON_MOVIE_CREDITS: (id: string) => `/person/${id}/movie_credits`,
    GET_PERSON_TV_CREDITS: (id: string) => `/person/${id}/tv_credits`,
    GET_PERSON_COMBINED_CREDITS: (id: string) =>
      `/person/${id}/combined_credits`,
    GET_PERSON_IMAGES: (id: string) => `/person/${id}/images`,
    GET_PERSON_TAGS: (id: string) => `/person/${id}/tagged_images`,
    GET_PERSON_SOCIAL: (id: string) => `/person/${id}/external_ids`,
  },

  SEARCH: {
    SEARCH_MOVIE: '/search/movie',
    SEARCH_TV: '/search/tv',
    SEARCH_PEOPLE: '/search/person',
  },

  GENRES: {
    GET_GENRES_MOVIE: '/genre/movie/list',
    GET_GENRES_TV: '/genre/tv/list',
  },

  CONFIG: {
    GET_CONFIGURATION: '/configuration',
    GET_IMAGE_CONFIGURATION: '/configuration/images',
  },

  ACCOUNT: {
    GET_ACCOUNT: '/account',
    GET_ACCOUNT_FAVORITE_MOVIES: (accountId: string) =>
      `/account/${accountId}/favorite/movies`,
    GET_ACCOUNT_FAVORITE_TV: (accountId: string) =>
      `/account/${accountId}/favorite/tv`,
    GET_ACCOUNT_RATED_MOVIES: (accountId: string) =>
      `/account/${accountId}/rated/movies`,
    GET_ACCOUNT_RATED_TV: (accountId: string) =>
      `/account/${accountId}/rated/tv`,
    GET_ACCOUNT_WATCHLIST_MOVIES: (accountId: string) =>
      `/account/${accountId}/watchlist/movies`,
    GET_ACCOUNT_WATCHLIST_TV: (accountId: string) =>
      `/account/${accountId}/watchlist/tv`,
  },

  AUTHENTICATION: {
    CREATE_GUEST_SESSION: '/authentication/guest_session/new',
    CREATE_REQUEST_TOKEN: '/authentication/token/new',
    CREATE_ACCESS_TOKEN: '/authentication/token/validate_with_login',
  },

  DISCOVER: {
    DISCOVER_MOVIES: '/discover/movie',
    DISCOVER_TV: '/discover/tv',
  },

  COLLECTIONS: {
    GET_COLLECTION: (id: string) => `/collection/${id}`,
    GET_COLLECTION_IMAGES: (id: string) => `/collection/${id}/images`,
  },

  KEYWORDS: {
    GET_KEYWORD: (id: string) => `/keyword/${id}`,
    GET_MOVIES_BY_KEYWORD: (id: string) => `/keyword/${id}/movies`,
  },

  LANGUAGE: {
    GET_LANGUAGES: '/configuration/languages',
  },

  MOVIE_LISTS: {
    GET_LIST: (id: string) => `/list/${id}`,
    GET_LIST_ITEMS: (id: string) => `/list/${id}/items`,
  },
}
