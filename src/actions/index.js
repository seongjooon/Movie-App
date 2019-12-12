import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  GET_MOVIE_ACTOR
} from '../constants/actionTypes';

export const getMovieListAction = movieList => ({
  type: GET_MOVIES,
  movieList
});

export const getMovieDetailAction = movieDetail => ({
  type: GET_MOVIE_DETAIL,
  movieDetail
});

export const getMovieActorAction = actorList => ({
  type: GET_MOVIE_ACTOR,
  actorList
});
