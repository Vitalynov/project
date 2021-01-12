window.addEventListener('DOMContentLoaded', () => {
    'use strict';


});


/* Header */
/* Main */
'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        } else {
            console.log('База не доступна');
        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {

            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre == "" || genre == null) {
            //     console.log('Вы ввели некорректные данные');
            //     i--;
            // }

            // personalMovieDB.genres[i - 1] = genre;
            let genres = prompt(`Введите Ваш любимый фильм через запятую`);
            if (genres == "" || genres == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                this.genres = genres.split(", ");
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};


/* Footer */