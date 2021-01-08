let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}

start();


let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2;  i ++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцение его?', '');
        if (a.length === 0 || a.length > 50 || a === null || b.length === 0 || b.length > 50 || b === null) {
            a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцение его?', '');
        }   
        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();


function writeYourGenres() {
    for (let i = 1; i < 4; i ++) {
        let whatIsGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        
        personalMovieDB.genres.push(whatIsGenre);
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

    
   
 /*
   2-й способ:******************************************************************
  let i=0;
    do { 
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцение его?', '');
            i ++;
            if (a.length === 0 || a.length > 50 || a === null || b.length === 0 || b.length > 50 || b === null) {
                i --;
            }
            personalMovieDB.movies[a] = b;
    }
    while (i < 2);
   
    3-й способ:*******************************************************************************
    let i=0;
    while (i < 2) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцение его?', '');
            i ++;
            if (a.length === 0 || a.length > 50 || a === null || b.length === 0 || b.length > 50 || b === null) {
                i --;
            }
            personalMovieDB.movies[a] = b;

    }

    console.log(personalMovieDB);
    
let num = 20;
function showMeMessage(text) {
    console.log(text);
    num = 10;
}
showMeMessage('fuck');
console.log(num);

function calc(a, b) { 
    return (a + b);
    
}    

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6)); 

function ret() {
    let num = 50;
    return num;
}


let logger = function() {
    console.log('Hello!');
};
logger();


let calcu = (m, n) => {
    return (m + n);
    };

    calcu(4, 3);    

let str = 'Hello, my dear friend';
console.log(str.slice(str.indexOf('l'), str.length));
*/