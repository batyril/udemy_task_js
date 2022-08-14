function getNumberOfFilms() {
  let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  while (numberOfFilms === 0 || numberOfFilms === '' || numberOfFilms === null || Number.isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?2');
  }
  return numberOfFilms;
}

const numberOfFilms = getNumberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function setUserFilms() {
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
}



function PersonalStatus() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 3) {
    alert('Вы классический зритель');
  }
}

PersonalStatus();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

function writeYourGenres(countQuestions) {
  for (let i = 1; i <= countQuestions; i += 1) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
  }
}

writeYourGenres(2);
