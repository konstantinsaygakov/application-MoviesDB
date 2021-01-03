'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


console.log(numberOfFilms);

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b; 
/* обращаемся к переменной personalMoviesDB ставим . movies и через квадратные скобки записываем это значение [a] - это ответ на первый вопрос, ставим знак присваивания = и ставим b - это ответ на второй вопрос. */
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);

