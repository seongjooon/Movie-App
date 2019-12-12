import { combineReducers } from 'redux';
import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  GET_MOVIE_ACTOR
} from '../constants/actionTypes';

export const initialState = {
  movieList: [],
  genreList: [],
  movieDetail: {},
  movieActorList: []
};

export const getMoviesReducer = (state = initialState.movieList, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return [...state, ...action.movieList];
    default:
      return state;
  }
};

export const getMovieDetailReducer = (state = initialState.movieDetail, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return action.movieDetail;
    default:
      return state;
  }
};

export const getMovieActorReducer = (state = initialState.movieActorList, action) => {
  switch (action.type) {
    case GET_MOVIE_ACTOR:
      return action.actorList;
    default:
      return state;
  }
};

const movieapp = combineReducers({
  movieList: getMoviesReducer,
  movieDetail: getMovieDetailReducer,
  movieActorList: getMovieActorReducer
});

export default movieapp;
