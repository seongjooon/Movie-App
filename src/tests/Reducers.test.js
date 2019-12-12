import {
  initialState,
  getMoviesReducer,
  getMovieGenreReducer,
  getMovieDetailReducer
} from '../reducers/index';

import {
  GET_MOVIES,
  GET_MOVIES_GENRE,
  GET_MOVIE_DETAIL
} from '../constants/actionTypes';

describe('reducers', () => {
  it('should return init value', () => {
    expect(initialState).toHaveProperty('movieList');
    expect(initialState).toHaveProperty('genreList');
    expect(initialState.movieList).toEqual([]);
    expect(initialState.movieActorList.length).toEqual(0);
    expect(getMoviesReducer(undefined, {})).toEqual(initialState.movieList);
    expect(getMovieGenreReducer(undefined, {})).toEqual(initialState.genreList);
  });

  describe('data of action should return equal value', () => {
    it('in getMoviesReducer', () => {
      expect(
        getMoviesReducer(initialState.movieList, {
          type: GET_MOVIES,
          movieList: []
        })
      ).toEqual([]);
      expect(
        getMoviesReducer([], {
          type: GET_MOVIES,
          movieList: [
            {
              title: 'Life of vaco',
              release: 2019 - 12 - 11,
              genre_ids: [1, 2, 5]
            }
          ]
        })
      ).toEqual([
        {
          title: 'Life of vaco',
          release: 2019 - 12 - 11,
          genre_ids: [1, 2, 5]
        }
      ]);
    });

    it('in getMovieGenreReducer', () => {
      const genreList = ['Horor', 'Comic', 'Action'];
      expect(
        getMovieGenreReducer(initialState.genreList, {
          type: GET_MOVIES_GENRE,
          genreList
        })
      ).toEqual([...genreList]);
      expect(
        getMovieGenreReducer([...genreList], {
          type: GET_MOVIES_GENRE,
          genreList: [...genreList, 'Animation', 'Fantasy']
        })
      ).toEqual([...genreList, 'Animation', 'Fantasy']);
    });

    it('in getMovieDetailReducer', () => {
      const movieDetail = {
        title: 'Sugar',
        release: 2016 - 11 - 10,
        genre_ids: [11, 32, 45]
      };
      expect(
        getMovieDetailReducer(initialState.movieDetail, {
          type: GET_MOVIE_DETAIL,
          movieDetail
        })
      ).toEqual({
        title: 'Sugar',
        release: 2016 - 11 - 10,
        genre_ids: [11, 32, 45]
      });
      expect(
        getMovieDetailReducer(movieDetail, {
          type: GET_MOVIE_DETAIL,
          movieDetail: {
            title: 'Lion King',
            release: 2011 - 3 - 20,
            genre_ids: [10, 64, 99]
          }
        })
      ).toEqual({
        title: 'Lion King',
        release: 2011 - 3 - 20,
        genre_ids: [10, 64, 99]
      });
    });
  });
});
