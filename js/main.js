window.addEventListener('DOMContentLoaded', () => {
    'use strict';


});


/* Header */
/* Main */
"use strict";

//Практика 1.
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
if (0 < numberOfFilms < 10) {
    alert('Вы не любите КИНО?');
} else if (10 < numberOfFilms < 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms >= 30) {
    alert('Вы КИНО-ман?');
} else {
    alert('Произошла ошибка');
}
console.log(numberOfFilms);

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//Практика 2.


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("Done");
//     } else {
//         console.log("Error");
//         i--;
//     }
// }

// console.log(personalMovieDB);
/* Footer */