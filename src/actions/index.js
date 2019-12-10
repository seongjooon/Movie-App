import {
  GET_MOVIES,
  GET_MOVIES_GENRE,
  GET_MOVIE_DETAIL
} from '../constants/actionTypes';

export const getMovieListAction = data => ({
  type: GET_MOVIES,
  data
});

export const getMovieGenreAction = data => ({
  type: GET_MOVIES_GENRE,
  data
});

export const getMovieDetailAction = data => ({
  type: GET_MOVIE_DETAIL,
  data
});
