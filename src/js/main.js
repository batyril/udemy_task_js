const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: true,
  start() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?');
    while (this.count === 0 || this.count === '' || this.count === null || Number.isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?2');
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < this.count; i += 1) {
      const lastWatchFilm = prompt('Один из последних просмотренных фильмов?');
      const ratingFilm = prompt('На сколько оцените его?');
      const isCheckName = (lastWatchFilm.length !== 0 && lastWatchFilm.length < 50
        && ratingFilm !== '' && lastWatchFilm !== ''
        && ratingFilm !== null && lastWatchFilm !== null);
      if (isCheckName) {
        this.movies[lastWatchFilm] = ratingFilm;
      } else {
        alert('ошибка');
        i -= 1;
      }
    }
  },
  detectPersonalStatus() {
    if (this.count < 10) {
      console.log(('Просмотрено довольно мало фильмов'));
    } else if (this.count > 10 && this.count < 3) {
      console.log(('Вы классический зритель'));
    }
  },
  showMyDB() {
    if (!this.private) {
      console.log(this);
    }
  },
  writeYourGenres(countQuestions) {
    for (let i = 1; i <= countQuestions; i += 1) {
      const genreFilm = prompt(`Ваш любимый жанр под номером ${i}`);
      if (typeof genreFilm !== 'string' || genreFilm.length === 0) {
        i -= 1;
      } else {
        this.genres.push(genreFilm);
      }
    }
    this.genres.forEach((film, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${film}`);
    });
  },
  writeYourGenresNew() {
    for (let i = 1; i < 2; i += 1) {
      const genreFilm = prompt('Введите ваши любимые фильмы через запятую');
      if (genreFilm === '' || genreFilm === null) {
        i -= 1;
        console.log('Вы ввели некорректное данные, повторите заново');
      } else {
        this.genres = genreFilm.split(',');
      }
    }
  },
  toggleVisibleMyDB() {
    if (!this.private) {
      this.private = true;
    } else {
      this.private = false;
    }
  },
};
personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();
