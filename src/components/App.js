import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Main from './Main/Main';
import Detail from './Detail/Detail';
import Logo from '../image/main-logo.png';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const {
      movieList,
      genreList,
      getMovieDetail,
      movieDetail,
      movieActorList
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
            render={() => <Main movieList={movieList} genreList={genreList} />}
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
