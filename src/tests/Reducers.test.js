import initialState from '../reducers/index';
import getMoviesReducer from '../reducers/index';
import getMovieGenreReducer from '../reducers/index';
import getMovieDetailReducer from '../reducers/index';
import getMovieActorReducer from '../reducers/index';

import {
  GET_MOVIES,
  GET_MOVIES_GENRE,
  GET_MOVIE_DETAIL,
  GET_MOVIE_ACTOR
} from '../constants/actionTypes';

describe('reducers', () => {
  it('should return init value', () => {
    expect(initialState).toHaveProperty('movieList');
    expect(initialState).toHaveProperty('genreList');
    expect(initialState.movieActorList.length).toEqual(0);
    expect(getMoviesReducer(undefined, {})).toEqual(initialState.movieList);
    expect(getMovieGenreReducer(undefined, {})).toEqual(initialState.genreList);
  });

});
