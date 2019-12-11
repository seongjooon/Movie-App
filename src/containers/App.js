import { connect } from 'react-redux';
import App from '../components/App';
import {
  getMoviesApi,
  getMoviesGenreApi,
  getMovieDetailApi,
  getMovieActorApi
} from '../api';
import {
  getMovieListAction,
  getMovieGenreAction,
  getMovieDetailAction,
  getMovieActorAction
} from '../actions';

const mapStateToProps = state => ({
  movieList: state.movieList,
  genreList: state.genreList,
  movieDetail: state.movieDetail,
  movieActorList: state.movieActorList
});

const mapDispatchToProps = dispatch => ({
  onLoad: async () => {
    await getMoviesApi()
      .then(res => {
        dispatch(getMovieListAction(res.results));
      })
      .catch(err => console.log(err));
    await getMoviesGenreApi()
      .then(res => {
        dispatch(getMovieGenreAction(res.genres));
      })
      .catch(err => console.log(err));
  },
  getMovieDetail: async movie_id => {
    await getMovieDetailApi(movie_id)
      .then(res => {
        dispatch(getMovieDetailAction(res));
      })
      .catch(err => console.log(err));
    await getMovieActorApi(movie_id)
      .then(res => {
        dispatch(getMovieActorAction(res));
      })
      .catch(err => console.log(err));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
