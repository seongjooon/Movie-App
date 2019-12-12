import React, { Component } from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import { MOVIE_IMAGE_URL } from '../../constants/constant';
import Noimage from '../../image/Noimage.png';
import debounce from 'lodash/debounce';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1
    };
    this.scrollEvent = debounce(this._scrollPage, 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent);
    const { onLoad } = this.props;
    const { pageNumber } = this.state;
    onLoad(pageNumber);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  _scrollPage = () => {
    const { onLoad } = this.props;
    const { pageNumber } = this.state;

    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop - clientHeight <= 200) {
      this.setState(
        {
          pageNumber: pageNumber + 1
        },
        onLoad(pageNumber)
      );
    }
  };

  render() {
    const { movieList, genreList } = this.props;

    return (
      <div className="Main">
        {movieList.map((movie, index) => (
          <Link to={`/movie/${movie.id}`} className="movie-element" key={index}>
            {movie.poster_path ? (
              <img
                src={MOVIE_IMAGE_URL + movie.poster_path}
                alt={movie.title}
              />
            ) : (
              <img src={Noimage} alt="Noimage" />
            )}
            <div className="movie-description">
              <div className="movie-title">{movie.title}</div>
              <div className="movie-rating">{movie.vote_average}</div>
              <div className="movie-date">{movie.release_date}</div>
              <div className="movie-genre-list">
                {genreList.map((genre, index) => (
                  <div className="movie-genre-wrapper" key={index}>
                    {movie.genre_ids.map((movieGenre, idx) => (
                      <>
                        {genre.id === movieGenre && (
                          <div className="movie-genre" key={idx}>
                            {genre.name}
                          </div>
                        )}
                      </>
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
  }
}

export default Main;
