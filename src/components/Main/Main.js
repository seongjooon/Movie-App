import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import { MOVIE_IMAGE_URL } from '../../constants/constant';
import Noimage from '../../image/Noimage.png';

const Main = ({ movieList, genreList }) => {
  return (
    <div className="Main">
      {movieList.map((movie, index) => (
        <Link to={`/movie/${movie.id}`} className="movie-element" key={index}>
          {movie.poster_path ? (
            <img src={MOVIE_IMAGE_URL + movie.poster_path} alt={movie.title} />
          ) : (
            <img src={Noimage} alt="Noimage" />
          )}
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
        </Link>
      ))}
    </div>
  );
};

export default Main;
