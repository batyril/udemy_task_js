const  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const  lastWatchFilm_1 = prompt('Один из последних просмотренных фильмов?');
const  ratingFilm_1 = +prompt('На сколько оцените его?');

const  lastWatchFilm_2 = prompt('Один из последних просмотренных фильмов?')
const  ratingFilm_2 = +prompt('На сколько оцените его?')


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false
};

personalMovieDB.movies[lastWatchFilm_1] = ratingFilm_1;

personalMovieDB.movies[lastWatchFilm_2] = ratingFilm_2

