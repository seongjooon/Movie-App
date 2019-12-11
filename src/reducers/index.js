import { combineReducers } from 'redux';
import {
  GET_MOVIES,
  GET_MOVIES_GENRE,
  GET_MOVIE_DETAIL,
  GET_MOVIE_ACTOR
} from '../constants/actionTypes';

const initialState = {
  movieList: [],
  genreList: [],
  movieDetail: {},
  movieActorList: []
};

const getMoviesReducer = (state = initialState.movieList, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return [...state, ...action.data];
    default:
      return state;
  }
};

const getMovieGenreReducer = (state = initialState.genreList, action) => {
  switch (action.type) {
    case GET_MOVIES_GENRE:
      return action.data;
    default:
      return state;
  }
};

const getMovieDetailReducer = (state = initialState.movieDetail, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return action.data;
    default:
      return state;
  }
};

const getMovieActorReducer = (state = initialState.movieActorList, action) => {
  switch (action.type) {
    case GET_MOVIE_ACTOR:
      return action.data;
    default:
      return state;
  }
};

const movieapp = combineReducers({
  movieList: getMoviesReducer,
  genreList: getMovieGenreReducer,
  movieDetail: getMovieDetailReducer,
  movieActorList: getMovieActorReducer
});

export default movieapp;
