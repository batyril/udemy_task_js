const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false,
};

for (let i = 0; i < numberOfFilms; i += 1) {
  const lastWatchFilm = prompt('Один из последних просмотренных фильмов?');
  const ratingFilm = prompt('На сколько оцените его?');
  const isCheckName = (lastWatchFilm.length !== 0 && lastWatchFilm.length < 50
    && ratingFilm !== '' && lastWatchFilm !== ''
    && ratingFilm !== null && lastWatchFilm !== null);
  if (isCheckName) {
    personalMovieDB.movies[lastWatchFilm] = ratingFilm;
  } else {
    alert('ошибка');
    i -= 1;
  }
}

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 3) {
  alert('Вы классический зритель');
}

console.log(personalMovieDB);
