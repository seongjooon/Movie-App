import axios from 'axios';
import { MOVIE_DB_URL, MOVIE_GENRE_URL } from '../constants/constant';

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
