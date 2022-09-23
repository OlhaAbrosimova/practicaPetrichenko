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

let a = 5,
	b = a;

b = b + a;

console.log(b);
console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4,
	},
};

const newNumbers = copy(numbers);

newNumbers.b = 10;
newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
	d: 17,
	e: 20,
};

// let commonObj = Object.assign(numbers, add);
// // console.log(commonObj);
// numbers.c.y = 22;

// console.log(numbers);
// console.log(commonObj);
// console.log(add);

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(0, 2);

newArray[1] = "xfgdfgdfg";
console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
	blogs = ["wordpress", "livejournal", "blogger"],
	internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];
newAarray[0] = "c";

console.log(newAarray);
console.log(array);

const q = {
	one: 1,
	two: 2,
};

const newObj = { ...q };
console.log(newObj);

//задача 1 после 35.
const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%",
		},
		exp: "1 month",
	},
};

function showExperience(plan) {
	const { exp } = plan.skills;
	return exp;
}

console.log(showExperience(personalPlanPeter));

//задача 2

// function showProgrammingLangs(plan) {

// 	let str = "";
// 	const { programmingLangs } = plan.skills;

// 	for (let key in programmingLangs) {
// 	str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
// 	}
// 	return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

//задача3
// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		languages: ["ru", "eng"],
// 		programmingLangs: {
// 			js: "20%",
// 			php: "10%",
// 		},
// 		exp: "1 month",
// 	},
// 	showAgeAndLangs: function (plan) {
// 		const { age } = plan;
// 		const { languages } = plan.skills;
// 		let str = `Мне ${age} и я владею языками: `;

// 		languages.forEach(function (lang) {
// 			str += `${lang.toUpperCase()} `;
// 		});
// 		return str;
// 	},
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

//howFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

//Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
// 	let str = "";

// 	arr.length === 0 ? (str = `Семья пуста`) : (str = `Семья состоит из: `);

// 	arr.forEach((member) => {
// 		str += `${member} `;
// 	});

// 	return str;
// }

// console.log(showFamily(family));

//2 задача

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
// 	let str = "";

// 	arr.forEach(function (city) {
// 		str += `${city}\n`;
// 	});

// 	console.log(str.toLowerCase());
// }

// standardizeStrings(favoriteCities);

// //2 задача 2-й вариант решения

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
// 	let str = "";
// 	for (let i = 0; i < arr.length; i++) {
// 		str += `${arr[i].toLowerCase()}\n`;
// 	}
// 	return str;
// }
// console.log(standardizeStrings(favoriteCities));

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
// 	arr.forEach((city) => {
// 		console.log(city.toLowerCase());
// 	});
// }

// standardizeStrings(favoriteCities);

//next задача.

// const someString = "This is some strange string";
// //reverse(someString) => 'gnirts egnarts emos si sihT'

// function reverse(str) {
// 	if (typeof str == 'string') {
// 	let arrayOfString = str.split('');
// 	const reversed = arrayOfString.reverse();
// 	let newString = reversed.join('');
// 	return newString;}
// 	else {return 'ошибка';}
// }

// console.log(reverse(someString));

// const someString = "This is some strange string";
// //reverse(someString) => 'gnirts egnarts emos si sihT'

// function reverse(str) {
// 	if (typeof str !== "string") {
// 		return "ошибка";
// 	}

// 	console.log(str.length);

// 	let newStr = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		newStr += str[i];
// 	}
// 	return newStr;
// }

// console.log(reverse(someString));

//след задача
// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY"];

// function availableCurr(arr, missingCurr) {
// 	let str = "";
// 	arr.length === 0
// 		? (str = `Нет доступных валют`)
// 		: (str = `Доступные валюты:\n`);

// 	arr.forEach(function (curr, i) {
// 		if (curr !== missingCurr) {
// 			str += `${curr}\n`;
// 		}
// 	});
// 	return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));
// console.log(availableCurr([], "CNY"));

///////////////
// const someString = "This is some strange string";

// let newString = "";
// function reverse(str) {
// 	if (typeof str !== "string") {
// 		return `Ошибка!`;
// 	}
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		newString += str[i];
// 	}
// 	return newString;
// }

// console.log(reverse(someString));

// ///////////////////////////
// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY"];
// let str = '';

// function availableCurr(arr, missingCurr) {
// 	if (arr.length === 0 ) {
// 		str = `Нет доступных валют`;
// 	} else {str = `Доступные валюты:\n`;}

// 	// arr.forEach(function(curr) {
// 	// 	if (curr !== missingCurr) {

// 	// 	}
// 	// 	str += `${curr}\n`;
// 	// });

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === missingCurr) {
// 		continue;
// 		}
// 		str += `${arr[i]}\n`;
// 	}
// return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];
let str = "";

function availableCurr(arr, missingCurr) {
	if (arr.length === 0) {
		str = `Нет доступных валют`;
	} else {
		str = `Доступные валюты:\n`;
	}

	arr.forEach(function (curr) {
		if (curr !== missingCurr) {
			str += `${curr}\n`;
		}
	});
	return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));
