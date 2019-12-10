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

export const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';
export const MOVIE_DB_URL = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=${year}-${month}-${day}`;
export const MOVIE_IMAGE_URL =
  'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
export const MOVIE_GENRE_URL = `/genre/movie/list?api_key=${API_KEY}&language=en-US`;
