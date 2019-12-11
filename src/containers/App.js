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
  onLoad: pageNmber => {
    getMoviesApi(pageNmber)
      .then(res => {
        dispatch(getMovieListAction(res.results));
      })
      .catch(err => console.log(err));
    getMoviesGenreApi()
      .then(res => {
        dispatch(getMovieGenreAction(res.genres));
      })
      .catch(err => console.log(err));
  },
  getMovieDetail: movie_id => {
    getMovieDetailApi(movie_id)
      .then(res => {
        dispatch(getMovieDetailAction(res));
      })
      .catch(err => console.log(err));
    getMovieActorApi(movie_id)
      .then(res => {
        dispatch(getMovieActorAction(res));
      })
      .catch(err => console.log(err));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
