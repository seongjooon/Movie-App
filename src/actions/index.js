import { GET_MOVIES, GET_MOVIES_GENRE } from '../constants/actionTypes';

export const getMovieListAction = data => ({
  type: GET_MOVIES,
  data
});

export const getMovieGenreAction = data => ({
  type: GET_MOVIES_GENRE,
  data
});
