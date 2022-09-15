"user strict";

//1//

const numberOfFilms = +prompt("How many films have you watched?", "");
console.log(numberOfFilms);

//2//
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

//3//

const filmName1 = prompt("Name one of the last movie you watched?", ""),
	filmGrade1 = prompt("What is your grade for this film?", ""),
	filmName2 = prompt("Name one of the last movie you watched?", ""),
	filmGrade2 = prompt("What is your grade for this film?", "");

personalMovieDB.movies[filmName1] = filmGrade1;
personalMovieDB.movies[filmName2] = filmGrade2;

console.log(personalMovieDB);
