import React, { Component } from 'react';
import './Main.scss';
import { MOVIE_IMAGE_URL } from '../../constants/constant';

class Main extends Component {
  render() {
    const { movieList, genreList } = this.props;

    return (
      <div className="Main">
        {movieList.map((movie, index) => (
          <div className="movie-element" key={index}>
            <img src={MOVIE_IMAGE_URL + movie.poster_path} alt={movie.title} />
            <div className="movie-description">
              <div className="movie-title">{movie.title}</div>
              <div className="movie-rating">{movie.vote_average}</div>
              <div className="movie-date">{movie.release_date}</div>
              <div>
                {genreList.map((genre, index) => (
                  <div className="movie-genre-list" key={index}>
                    {movie.genre_ids.map((movieGenre, idx) => (
                      <div key={idx}>
                        {genre.id === movieGenre && (
                          <div className="movie-genre">{genre.name}</div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Main;
