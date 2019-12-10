import { GET_MOVIES } from '../constants/actionTypes';

export const getMovieListAction = data => ({
  type: GET_MOVIES,
  data
});
