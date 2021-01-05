let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    lastFilmRate = prompt('На сколько оцение его?', ''),
    lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
    lastFilmRate2 = prompt('На сколько оцение его?', '');

    personalMovieDB.movies[lastFilm] = lastFilmRate;
    personalMovieDB.movies[lastFilm2] = lastFilmRate2;  

    console.log(personalMovieDB);
    