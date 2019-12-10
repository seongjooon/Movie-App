import { combineReducers } from 'redux';
import { GET_MOVIES, GET_MOVIES_GENRE } from '../constants/actionTypes';

const initialState = {
  movieList: [],
  genreList: []
};

const getMoviesReducer = (state = initialState.movieList, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.data;
    default:
      return state;
  }
};

const getMoviesGenreReducer = (state = initialState.genreList, action) => {
  switch (action.type) {
    case GET_MOVIES_GENRE:
      return action.data;
    default:
      return state;
  }
};

const movieapp = combineReducers({
  movieList: getMoviesReducer,
  genreList: getMoviesGenreReducer
});

export default movieapp;
