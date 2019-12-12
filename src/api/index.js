import axios from 'axios';
import { MOVIE_GENRE_URL } from '../constants/constant';

const today = new Date();
const year = String(today.getFullYear());
let month = String(today.getMonth() + 1);
let day = String(today.getDate());

if (month.length < 2) {
  month = `0${month}`;
}
if (day.length < 2) {
  day = `0${day}`;
}

export const getMoviesApi = async pageNmber => {
  return await axios
    .get(
      `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${pageNmber}&release_date.lte=${year}-${month}-${day}`
    )
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const getMoviesGenreApi = async () => {
  return await axios
    .get(MOVIE_GENRE_URL)
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const getMovieDetailApi = async movie_id => {
  return await axios
    .get(
      `/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const getMovieActorApi = async movie_id => {
  return await axios
    .get(`/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.data.cast)
    .catch(err => console.log(err));
};
