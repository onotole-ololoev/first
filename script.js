'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == null || genre == '') {
                i --;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);




/*  заккоментил перел выполнением 4-й практики

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


let obj = {
    name: 'tolya',
    age: 35,
    height: 169,
    hobbie: {
        guitar: 'low',
        football: 5,
        drawing: 10
    },
    makeTest: function() {
        console.log(3);
    }
};
obj.makeTest();

console.log(Object.keys(obj).length);

let counter = 0;
for (let key in obj) {
    if (typeof(obj[key]) === 'object') {
        for (let i in obj[key]) {
            console.log(`свойство ${i} имеет значение ${obj[key][i]}`);
        }
    } else {
        console.log(`свойство ${key} имеет значение ${obj[key]}`);
        counter ++;
    }
}

console.log(counter);

const numbers = {
    a: 10,
    b: 2,
    c: 6,
    d: {
        e: 269,
        f: 23
    }
};

function newNumbers(objectIn) {
    let objectClone = {};
    for (let key in objectIn) {
        objectClone[key] = objectIn[key];
    }
    return objectClone;
}

let numbersClone = newNumbers(numbers);
console.log(numbersClone);


*/