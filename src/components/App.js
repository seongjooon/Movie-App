import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './Main/Main';
import Detail from './Detail/Detail';
import Logo from '../image/movie-app-logo.png';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { movieList, genreList, getMovieDetail } = this.props;

    return (
      <div className="App">
        <header>
          <div className="main-logo">
            <img src={Logo} alt="movie-app-logo" />
            <div className="movie-app-text">Movie App</div>
          </div>
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
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
