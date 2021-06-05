const config = require("../../package.json");

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const TMDB_API_KEY = config.projectConfig.apiKey;

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: "/movie/now_playing",
  UPCOMING_MOVIES: "/movie/upcoming",
  GENRES: "/genre/movie/list",
};

export { TMDB_BASE_URL, TMDB_API_KEY, TMDB_IMAGE_BASE_URL, ENDPOINTS };
