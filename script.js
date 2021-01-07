let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};


    for (let i = 0; i < 2;  i ++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцение его?', '');
        if (a.length === 0 || a.length > 50 || a === null || b.length === 0 || b.length > 50 || b === null) {
            a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцение его?', '');
        }   
        personalMovieDB.movies[a] = b;
    }

    if (personalMovieDB.count < 10 ) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }


    console.log(personalMovieDB);
    