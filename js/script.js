'use strict';

let numberOfFilms; //поменяли на let так как будем менять содержание переменной и она глобальная




function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


    //логика проверки в том что если пользователь ввел не правильно будем повторять вопрос
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {  // проверяем на то что переменная пустая строка || null || на то что пользователь ввел число
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //если пользователь ввел не те данные, вопрос повториться
    }
}
start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b; */
/* personalMoviesDB.movies[c] = d; */
/* обращаемся к переменной personalMoviesDB ставим . movies и через квадратные скобки записываем это значение [a] - это ответ на первый вопрос, ставим знак присваивания = и ставим b - это ответ на второй вопрос. */



/* let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--; //это значит что если условие не выполнилось то итерация цыкла вернется на единиуц назад
    }
    i++;
} */
/* let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--; //это значит что если условие не выполнилось то итерация цыкла вернется на единиуц назад
    }
    i++;
}
while (i < 2); */

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) { //мы задаем начало цыкла в 0, далее что цыкл будет выполнен 2 раза и что после первого выполнения выполнить еще раз.
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--; //это значит что если условие не выполнилось то итерация цыкла вернется на единиуц назад
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        alert('Просмотрно довольно мало фильмов!');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        alert('Вы классический зритель!');
    } else if (personalMoviesDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

detectPersonalLevel();

/* console.log(personalMoviesDB);
console.log(personalMoviesDB.movies); */

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) { //начинаем цыкл с 1 тк эти цыфры будут выводиться в вопросах
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    } // i - 1 если не поставить то в массиве запишется пустой элемент
}

writeYourGenres();

