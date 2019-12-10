import { connect } from 'react-redux';
import App from '../components/App';
import { getMoviesApi } from '../api';
import { getMovieListAction } from '../actions';

const mapStateToProps = state => ({
  movieList: state.movieList
});

const mapDispatchToProps = dispatch => ({
  onLoad: async () => {
    await getMoviesApi()
      .then(res => {
        dispatch(getMovieListAction(res.results));
      })
      .catch(err => console.log(err));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
