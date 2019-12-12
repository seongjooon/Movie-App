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
  getMovieDetailAction,
  getMovieActorAction
} from '../actions';

const mapStateToProps = state => ({
  movieList: state.movieList,
  movieDetail: state.movieDetail,
  movieActorList: state.movieActorList
});

const mapDispatchToProps = dispatch => ({
  onLoad: pageNmber => {
    getMoviesApi(pageNmber)
      .then(res => {
        const movieList = res.results;
        getMoviesGenreApi()
          .then(res => {
            const genreList = res.genres;
            movieList.forEach(movie => {
              const genreNameList = movie.genre_ids.map(genre => {
                for (let i = 0; i < genreList.length; i++) {
                  if (genre === genreList[i].id) {
                    return genreList[i].name;
                  }
                }
              });
              movie.genreNames = genreNameList;
            });
            dispatch(getMovieListAction(movieList));
          })
          .catch(err => console.log(err));
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
