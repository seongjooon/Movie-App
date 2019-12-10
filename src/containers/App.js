import { connect } from 'react-redux';
import App from '../components/App';
import { getMoviesApi, getMoviesGenreApi } from '../api';
import { getMovieListAction, getMovieGenreAction } from '../actions';

const mapStateToProps = state => ({
  movieList: state.movieList,
  genreList: state.genreList
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
