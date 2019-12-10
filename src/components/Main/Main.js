import React, { Component } from 'react';
import { MOVIE_IMAGE_URL } from '../../constants/constant';

class Main extends Component {
  render() {
    const { movieList } = this.props;

    return (
      <div className="Main">
        {movieList.map((movie, index) => (
          <div className="movie-element" key={index}>
            <img src={MOVIE_IMAGE_URL + movie.poster_path} alt={movie.title} />
            <div>{movie.title}</div>
            <div>{`${movie.adult}`}</div>
            <div>{movie.vote_average}</div>
            <div>{movie.release_date}</div>
            <div>{movie.overview}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Main;
