import React, { Component } from 'react';

class Detail extends Component {
  componentDidMount() {
    const { getMovieDetail, match } = this.props;
    const movieDetailUrl = match.params.movie_id;
    getMovieDetail(movieDetailUrl);
  }

  render() {
    return <div></div>;
  }
}

export default Detail;
