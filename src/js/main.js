const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const lastWatchFilm1 = prompt('Один из последних просмотренных фильмов?');
const ratingFilm1 = +prompt('На сколько оцените его?');
const lastWatchFilm2 = prompt('Один из последних просмотренных фильмов?');
const ratingFilm2 = +prompt('На сколько оцените его?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false,
};

personalMovieDB.movies[lastWatchFilm1] = ratingFilm1;

personalMovieDB.movies[lastWatchFilm2] = ratingFilm2;
