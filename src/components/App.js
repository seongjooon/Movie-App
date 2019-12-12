import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Main from './Main/Main';
import Detail from './Detail/Detail';
import Logo from '../image/main-logo.png';

class App extends Component {
  render() {
    const {
      onLoad,
      movieList,
      genreList,
      getMovieDetail,
      movieDetail,
      movieActorList,
      getNextPage
    } = this.props;

    return (
      <div className="App">
        <header>
          <Link to="/main" className="main-logo">
            <img src={Logo} alt="movie-app-logo" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route
            exact
            path="/main"
            render={() => (
              <Main
                onLoad={onLoad}
                movieList={movieList}
                genreList={genreList}
                getNextPage={getNextPage}
              />
            )}
          />
          <Route
            path="/movie/:movie_id"
            render={props => (
              <Detail
                {...props}
                getMovieDetail={getMovieDetail}
                genreList={genreList}
                movieDetail={movieDetail}
                movieActorList={movieActorList}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
