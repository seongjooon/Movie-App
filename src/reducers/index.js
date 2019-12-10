import { combineReducers } from 'redux';
import { GET_MOVIES } from '../constants/actionTypes';

const initialState = {
  movieList: []
};

const getMoviesReducer = (state = initialState.movieList, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.data;
    default:
      return state;
  }
};

const movieapp = combineReducers({
  movieList: getMoviesReducer
});

export default movieapp;
