"use strict";

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

// //practica chast3

// "use strict";

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt("How many films have you watched?", "").trim();

// 	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt("How many films have you watched?", "");
// 	}
// }

// start();
// console.log(numberOfFilms);

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const filmName = prompt("Name one of the last movie you watched?", ""),
// 			filmGrade = prompt("What is your grade for this film?", "");

// 		if (
// 			filmName != null &&
// 			filmGrade != null &&
// 			filmName != "" &&
// 			filmGrade != "" &&
// 			filmName.length < 50
// 		) {
// 			personalMovieDB.movies[filmName] = filmGrade;
// 			console.log(`done`);
// 		} else {
// 			console.log(`error`);
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		alert(`Просмотрено довольно мало фильмов`);
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
// 		alert(`Вы классический зритель`);
// 	} else if (personalMovieDB.count > 30) {
// 		alert(`Вы киноман`);
// 	} else {
// 		alert(`error`);
// 	}
// }

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

// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.privat);

// //3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// //"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// //genres

// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i - 1] = prompt(
// 			`Ваш любимый жанр под номером ${i}?`
// 		);
// 	}
// }

// // console.log(writeYourGenres());

// function calculateVolumeAndArea(a) {
// 	let volume = a * a * a;
// 	let area = a * a * 6;
// 	if (typeof a !== "number" || a <= 0 || !Number.isInteger(a)) {
// 		return `При вычислении произошла ошибка`;
// 	} else {
// 		return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// 	}
// }

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea("ddd"));
// console.log(calculateVolumeAndArea(15.233));
// console.log(calculateVolumeAndArea(-5));

// function getCoupeNumber(seatNumber) {
// 	if (seatNumber === 0 || seatNumber > 36) {
// 		return `Таких мест в вагоне не существует`;
// 	}

// 	if (
// 		typeof seatNumber !== `number` ||
// 		seatNumber < 0 ||
// 		!Number.isInteger(seatNumber)
// 	) {
// 		return `Ошибка. Проверьте правильность введенного номера места`;
// 	}
// 	return Math.ceil(seatNumber / 4);
// }

// console.log(getCoupeNumber(`bj hnb`));

// function getTimeFromMinutes(num) {
// 	if (typeof num != `number` || num < 0 || !Number.isInteger(num)) {
// 		return `Ошибка, проверьте данные`;
// 	}
// 	if (num < 60) {
// 		let h = 0;
// 		let m = num;
// 		return `Это ${h} часов и ${m} минут`;
// 	} else if (num >= 60) {
// 		let h = Math.floor(num / 60);
// 		if (h === 2 || h === 3 || h === 3 || h === 4) {
// 			let m = num - h * 60;
// 			return `Это ${h} часа и ${m} минут`;
// 		} else if (
// 			h === 5 ||
// 			h === 6 ||
// 			h === 7 ||
// 			h === 8 ||
// 			h === 9 ||
// 			h === 10
// 		) {
// 			let m = num - h * 60;
// 			return `Это ${h} часов и ${m} минут`;
// 		} else {
// 			let m = num - h * 60;
// 			return `Это ${h} час и ${m} минут`;
// 		}
// 	}
// }

// console.log(getTimeFromMinutes(61));
// console.log(getTimeFromMinutes(105));
// console.log(getTimeFromMinutes(233));
// console.log(getTimeFromMinutes(899));

// //2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
// //Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// //Пример:

// //findMaxNumber(1, 5, 6.6, 11); =>  11

// //findMaxNumber(1, 5, '6', '10');  =>  0

// function findMaxNumber(a, b, c, d) {
// 	if (
// 		typeof a !== "number" ||
// 		typeof b !== "number" ||
// 		typeof c !== "number" ||
// 		typeof d !== "number" ||
// 		a === null ||
// 		b === null ||
// 		c === null ||
// 		d === null
// 	) {
// 		return 0;
// 	} else {
// 		return Math.max(a, b, c, d);
// 	}
// }
// console.log(findMaxNumber(1, 2, 4, null));

// function getTimeFromMinutes(minutesTotal) {
// 	if (
// 		typeof minutesTotal !== "number" ||
// 		minutesTotal < 0 ||
// 		!Number.isInteger(minutesTotal)
// 	) {
// 		return "Ошибка, проверьте данные";
// 	}

// 	const hours = Math.floor(minutesTotal / 60);
// 	const minutes = minutesTotal % 60;

// 	let hoursStr = "";

// 	switch (hours) {
// 		case 0:
// 			hoursStr = "часов";
// 			break;
// 		case 1:
// 			hoursStr = "час";
// 			break;
// 		case 2:
// 		case 3:
// 		case 4:
// 			hoursStr = "часа";
// 			break;
// 		default:
// 			hoursStr = "часов";
// 	}

// 	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(182));

// function findMaxNumber(a, b, c, d) {
// 	// Самое простое - это использовать Math.max :)
// 	// А оптимизировать такую проверку мы научимся совсем скоро
// 	if (
// 		typeof a !== "number" ||
// 		typeof b !== "number" ||
// 		typeof c !== "number" ||
// 		typeof d !== "number" ||
// 	) {
// 		return 0;
// 	} else {
// 		return Math.max(a, b, c, d);
// 	}
// }

// console.log(findMaxNumber(1, 5, 10.5));
// console.log(findMaxNumber(1, 5, 10.5, 11));
// console.log(findMaxNumber(1, 5, "6", "10"));

//Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
//Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
//Причем, их количество должно быть равно переданному аргументу.

//Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

//Пример: fib(4) => ''0 1 1 2"

// function fib(num) {

//     for (let i = 0; i < num; i++) {
//     if (typeof num !== `number` || num <= 0 || !Number.isInteger(num)) {
//     return ``; }
//     else {
//         return `${i} ${i++}`;
//     }
// }
// }
// console.log(fib(4))

// function fib(num) {
// 	if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
// 		return "";
// 	}

// 	let result = "";
// 	let first = 0;
// 	let second = 1;

// 	for (let i = 0; i < num; i++) {
// 		if (i + 1 === num) {
// 			result += `${first}`;
// 			// Без пробела в конце
// 		} else {
// 			result += `${first} `;
// 		}

// 		let third = first + second;
// 		first = second;
// 		second = third;
// 	}

// 	return result;
// }

// console.log(fib(8));

function fib(n) {
	let arr = [];

	if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
		return "";
	}

	for (let i = 0; i < n; i++) {
		if (i < 2) {
			arr.push(i);
		} else {
			arr.push(arr[i - 1] + arr[i - 2]);
		}
	}

	return arr.join(" ");
}

console.log(fib(8));

// let date = "2025-12-31";

// let result = date.split("-").reverse().join(".");
// console.log(result);

//Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
//Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
//Причем, их количество должно быть равно переданному аргументу.

//Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
function fib(num) {
	let str = [];
	if (typeof num !== `number` || num <= 0 || !Number.isInteger(num)) {
		return str;
	}

	for (let i = 0; i < num; i++) {
		if (i < 2) {
			str.push(i);
		} else {
			str.push(str[i - 1] + str[i - 2]);
		}
	}
	return str.join(" ");
}

console.log(fib(1));

function first() {
	//do smth
	setTimeout(function () {
		console.log(`gi: 1`);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log(`Я прошел этот урок!`);
}

console.log(learnJS("JavaScript", done));

const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		bg: "red",
	},
	makeTest: function () {
		console.log("Test");
	},
};

options.makeTest();

const { border, bg } = options.colors;
console.log(border);

// console.log(options.name);

// options.data = '21.12.22';
// console.log(options.data);

// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) {
	// if (typeof options[key] === "object") {
	// 	for (let i in options[key]) {
	// 		console.log(`Свойство ${key} имеет значение ${options[key][i]}`);

	// 	}
	// } else {
	// 	console.log(`Свойство ${key} имеет значение ${options[key]}`);
	counter++;
}
// }
console.log(counter);

console.log(Object.keys(options));

console.log(Object.keys(options).length);
