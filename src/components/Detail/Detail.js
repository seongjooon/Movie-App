import React, { Component } from 'react';
import './Detail.scss';
import { MOVIE_IMAGE_URL } from '../../constants/constant';
import Rating from 'react-rating';
import Noimage from '../../image/Noimage.png';
import Adult from '../../image/adult-icon.png';
import Star from '../../image/rating_star.png';
import EmptyStar from '../../image/rating_empty_star.png';

class Detail extends Component {
  componentDidMount() {
    const { match, getMovieDetail } = this.props;
    const movieId = match.params.movie_id;

    getMovieDetail(movieId);
  }

  render() {
    const { movieDetail, movieActorList } = this.props;

    return (
      <div className="Detail">
        <div className="movie-element">
          {movieDetail.poster_path ? (
            <img
              className="poster"
              src={MOVIE_IMAGE_URL + movieDetail.poster_path}
              alt={movieDetail.title}
            />
          ) : (
            <img className="poster" src={Noimage} alt="Noimage" />
          )}
          <div className="movie-detail-description">
            <div className="movie-detail-title-wrapper">
              <div className="movie-detail-title">{movieDetail.title}</div>
              <div className="movie-detail-date">
                ({String(movieDetail.release_date).slice(0, 4)})
              </div>
              <div className="movie-detail-adult">
                {movieDetail.adult && <img src={Adult} alt="Adult" />}
              </div>
            </div>
            <Rating
              className="movie-detail-rating"
              readonly
              initialRating={movieDetail.vote_average / 2}
              emptySymbol={<img src={EmptyStar} className="icon" alt="icon" />}
              fullSymbol={<img src={Star} className="icon" alt="icon" />}
            />
            <div className="movie-genre-list">
              {movieDetail.genres &&
                movieDetail.genres.map((movieGenre, idx) => (
                  <div className="movie-genre" key={idx}>
                    {movieGenre.name}
                  </div>
                ))}
            </div>
            <div className="movie-detail-overview-title">
              {movieDetail.overview && 'Overview'}
            </div>
            <p className="movie-detail-overview">{movieDetail.overview}</p>
          </div>
          <div className="cast-title">
            {movieActorList[0] && 'Top Billed Cast'}
          </div>
          <div className="actor-list-wrapper">
            <div className="cast-list">
              {movieActorList.map(actor => (
                <div className="actor-data" key={actor.credit_id}>
                  {actor.profile_path ? (
                    <img
                      src={MOVIE_IMAGE_URL + actor.profile_path}
                      alt={actor.title}
                    />
                  ) : (
                    <img src={Noimage} alt="Noimage" />
                  )}
                  <div className="actor-name">{actor.name}</div>
                  <div className="actor-character">{actor.character}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
