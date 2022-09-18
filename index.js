// "user strict";

//1//

// const numberOfFilms = +prompt("How many films have you watched?", "");
// console.log(numberOfFilms);

// //2//
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// //3//

// const filmName1 = prompt("Name one of the last movie you watched?", ""),
// 	filmGrade1 = prompt("What is your grade for this film?", ""),
// 	filmName2 = prompt("Name one of the last movie you watched?", ""),
// 	filmGrade2 = prompt("What is your grade for this film?", "");

// personalMovieDB.movies[filmName1] = filmGrade1;
// personalMovieDB.movies[filmName2] = filmGrade2;

// console.log(personalMovieDB);

//practica chast3

"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How many films have you watched?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How many films have you watched?", "");
	}
}

// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const filmName = prompt("Name one of the last movie you watched?", ""),
			filmGrade = prompt("What is your grade for this film?", "");

		if (
			filmName != null &&
			filmGrade != null &&
			filmName != "" &&
			filmGrade != "" &&
			filmName.length < 50
		) {
			personalMovieDB.movies[filmName] = filmGrade;
			console.log(`done`);
		} else {
			console.log(`error`);
			i--;
		}
	}
}

// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert(`Просмотрено довольно мало фильмов`);
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert(`Вы классический зритель`);
	} else if (personalMovieDB.count > 30) {
		alert(`Вы киноман`);
	} else {
		alert(`error`);
	}
}

// detectPersonalLevel();

//2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
//false - выводит в консоль главный объект программы

// function showMyDB() {
// 	if (!personalMovieDB.privat) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB();

//либо написать так:

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

//3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
//"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
//genres

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(
			`Ваш любимый жанр под номером ${i}?`
		);
	}
}

console.log(writeYourGenres());
