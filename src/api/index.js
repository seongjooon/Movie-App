import axios from 'axios';
import { API_KEY, MOVIE_DB_URL, MOVIE_GENRE_URL } from '../constants/constant';

export const getMoviesApi = () => {
  return axios
    .get(MOVIE_DB_URL)
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const getMoviesGenreApi = () => {
  return axios
    .get(MOVIE_GENRE_URL)
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const getMovieDetailApi = movie_id => {
  return axios
    .get(`/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const getMovieActorApi = movie_id => {
  return axios
    .get(`/movie/${movie_id}/credits?api_key=${API_KEY}`)
    .then(res => res.data.cast)
    .catch(err => console.log(err));
};
