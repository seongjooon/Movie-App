import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './Main/Main';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { movieList } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route
            exact
            path="/main"
            render={() => <Main movieList={movieList} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
