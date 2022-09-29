// // if (num < 50) {
// //     console.log("ok")
// // } else if (num > 100) {
// //     console.log("too much")
// // } else {console.log("not today") }

// //switch

// // const num = "50";

// // switch (num) {
// // 	case "49":
// // 		console.log("false meaning");
// // 		break;
// // 	case "52":
// // 		console.log("too much");
// // 		break;
// // 	case "50":
// // 		console.log("exactly");
// // 		break;
// // 	default:
// // 		console.log("not today");
// // 		break;
// // }

// // const hamburger = 5;
// // const fries = 0;

// // if (hamburger && fries) {
// // console.log("Я сыт!");}

// // console.log((hamburger && fries));

// // const hamburger = 3;
// // const fries = 1;
// // const cola = 2;

// // console.log (hamburger === 3 && cola === 2 && fries)

// // let john, mar, ddf, ddd = 'done';

// // console.log(john || ddf || mar || ddd);

// // const hamburger = 3;
// // const fries = 1;
// // const cola = 2;
// // const nuggets = 5;

// // if (hamburger === 4 && cola === 2 || fries && nuggets === 5) {
// //     console.log('Мы сыты!');
// // } else {console.log('Мы не сыты!');}

// // console.log(hamburger === 4 && cola === 2 || fries && nuggets);

// // console.log((5 === 5 && 3 > 1) || 5);
// // console.log(3>1);

// // console.log(NaN || 2 || undefined);

// // console.log(NaN && 2 && undefined);

// // console.log(1 && 2 && 3);

// // console.log((!1 && 2) || !3);

// // console.log(25 || (null && !3));

// // console.log(NaN || null || !3 || undefined || 5);

// // console.log(NaN || (null && !3 && undefined) || 5);

// // console.log((5 === 5 && 3 > 1) || 5);

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;

// // if ((hamburger && cola) || (fries === 3 && nuggets)) {
// // 	console.log("Done!");
// // } else {console.log("no")}

// // let num = 50;

// // while (num < 60) {
// //     console.log(num);
// //     num++;
// // }

// // let num = 50;

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// // for (let i = 1; i < 8; i++) {
// //     console.log(i);
// // }

// // let num = 50;
// // for (let i = 1; i < 15; i++) {
// //     console.log(num);
// //     num++;
// // }

// // for (let i = 1; i < 15; i++) {
// // 	if (i === 6) {
// // 		continue;
// // 	}
// // 	console.log(i);
// // }

// // let i = 0;

// // for (i = 0; i < 3; i++) {

// // 	console.log(i); // 0, 1, 2
// // }

// // console.log(i);

// // for (let i = 0; i < 10; i++) {
// // 	if (i % 3) {
// // 		console.log(i);
// // 	}
// // }

// // задача\\
// // let result = '';
// // const length = 7;

// // for (let i = 1; i < length; i++) {
// // 	for (let j = 0; j<i; j++) {
// // 		result += '*';
// // 	}

// // 	result += `\n`;

// // }
// // console.log(result);

// // for (let i = 0; i < 3; i++) {
// // console.log(i);
// // for (let j = 2; j < 8; j++) {
// // console.log(j);
// // }
// // }

// //  tryAgain: for (let i = 0; i < 3; i++) {
// // 	console.log(`First level: ${i}`);
// // 	for (let j = 10; j < 15; j++) {
// // 		console.log(`Second level: ${j}`);
// // 		for (let k = 20; k < 25; k++) {
// // 			if (k === 22) break tryAgain;
// // 			console.log(`Third level: ${k}`);
// // 		}
// // 	}
// // }

// // let i = 3;

// // while (i) {
// // 	console.log(i--);
// // }

// // let i = 0;
// // // while (++i < 5) console.log(i);
// // while (i++ < 5) console.log(i);

// // for (let i = 1; i <= 10; i++) {
// // 	if (i%2 != 0) continue;
// // 	console.log(i)};

// // for (let i = 0; i < 3; i++) {
// // 	console.log(`number ${i}!`);
// // }

// // let i = 0;
// // while (i<3) {

// // 	console.log(`number ${i}!`)
// // 	i++;
// // }

// // let num;
// // do  {
// // 	num = +prompt("Напишите число большее, чем 100?", 0);
// // } while (num <= 100 && num);

// // Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// // Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// // Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// // Напишите код, который выводит все простые числа из интервала от 2 до n.

// // Для n = 10 результат должен быть 2,3,5,7.

// // P.S. Код также должен легко модифицироваться для любых других интервалов.

// // let n = 10;

// // nextPrime: for (let i = 2; i <= n; i++)

// // {console.log(`First level: ${i}`);
// // 	for (let j=2; j<i; j++) {
// // 		console.log(`Second level: ${j}`);
// // 		if (i%j == 0) continue nextPrime;

// // 	}
// // 	console.log(`Result ${i}`);
// // }

// // let i, j;

// // loop1: for (i = 0; i < 3; i++) {
// // 	//Первый цикл, обозначенный меткой "loop1"
// // 	loop2: for (j = 0; j < 3; j++) {
// // 		//Второй цикл, обозначенный меткой "loop2"
// // 		if (i === 1 && j === 1) {
// // 			continue loop1;
// // 		}
// // 		console.log("i = " + i + ", j = " + j);
// // 	}
// // }

// // let itemsPassed = 0;
// // let i, j;

// // top: for (i = 0; i < items.length; i++) {
// // 	for (j = 0; j < tests.length; j++) {
// // 		if (!tests[j].pass(items[i])) {
// // 			continue top;
// // 		}
// // 	}

// // 	itemsPassed++;
// // }

// //Задачи:

// //1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// // for (let i=5; i<=10; i++) {
// // 	console.log(i);
// // }

// //2. При помощи цикла for вывести числа от 20 до 10 в консоль.
// //В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// // for  (let i=20; i>=10; i--) {
// // 	if (i === 13) break;
// // 	console.log(i);
// // }

// //3. При помощи цикла for выведите чётные числа от 2 до 10 включительно

// // for (let i = 2; i<=10; i++) {
// // 	if (i%2 === 0) {
// // 	console.log(i)
// // }}

// //4. Перепишите цикл  for на вариант с while.
//Результат должен остаться точно таким же.
//Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// //  Цикл, который нужно переписать:

// //  for (let i = 2; i <= 16; i++) {
// //      if (i % 2 === 0) {
// //          continue;
// //      } else {
// //          console.log(i);
// //      }
// //  }

// // let i = 2;
// // while (i <= 16) {
// // 	if (i % 2 === 0) {
// // 		i++;
// // 		continue;
// // 	} else {
// // 		console.log(i);
// // 	}
// // 	i++;
// // }

// //5.Заполните массив цифрами от 5 до 10 включительно.
// //Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// // 	const arrayOfNumbers = [];

// // 	for (let i = 5; i <= 10; i++) {

// // 		console.log(arrayOfNumbers[0] = `${i}`);
// // 	}
// //  return arrayOfNumbers;

// //  const arrayOfNumbers = [];

// //  for (let i = 8; i < 15; i++) {
// // 		arrayOfNumbers[i - 8] = i;
// //  }

// //  console.log(arrayOfNumbers);
// //  return arrayOfNumbers;

// //  const arr = [3, 5, 8, 16, 20, 23, 50];
// // 		const result = [];

// // 		for (let i = 0; i < arr.length; i++) {
// // 			result[i] = arr[i];
// // 		}
// // 		console.log(result);
// // 		return result;

// // 	const arr = [3, 5, 8, 16, 20, 23, 50];
// // 	const result = [1];
// // 	result.push(...arr); // ["apple", "banana", "orange", "plum"]

// // console.log(result);

// // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

// // function secondTask() {
// // 	const data = [5, 10, "Shopping", 20, "Homework"];

// // 	for (let i = 0; i < data.length; i++) {
// // 		if (typeof data[i] === "number") {
// // 			data[i] = data[i] * 2;
// // 		} else if (typeof data[i] === "string") {
// // 			data[i] = `${data[i]} - done`;
// // 		}
// // 	}

// // 	console.log(data);
// // 	return data;
// // }

// // secondTask();

// // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// // const data = [5, 10, "Shopping", 20, "Homework"];
// // const result = [];

// // for (let i=1; i <= data.length; i++) {
// // result[i-1] = data[data.length-i];}

// // console.log(result);

// // const lines = 5;
// // let result = "";

// // for (let i = 0; i <= lines; i++) {
// // 	for (let j = 0; j < lines - i; j++) {
// // 		result += " ";
// // 	}
// // 	for (let j = 0; j < 2 * i + 1; j++) {
// // 		result += "*";
// // 	}
// // 	result += "\n";
// // }

// // console.log(result);

// /* Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// // "use strict";

// // Код возьмите из предыдущего домашнего задания
// // const numberOfFilms = prompt("How many films have you watched?", "");

// // const personalMovieDB = {
// // 	count: numberOfFilms,
// // 	movies: {},
// // 	actors: {},
// // 	genres: [],
// // 	privat: false,
// // };

// // for (let i = 0; i < 2; i++) {
// // 	const filmName = prompt("Name one of the last movie you watched?", ""),
// // 		filmGrade = prompt("What is your grade for this film?", "");

// // 	if (
// // 		filmName != null &&
// // 		filmGrade != null &&
// // 		filmName != "" &&
// // 		filmGrade != "" &&
// // 		filmName.length < 50
// // 	) {
// // 		personalMovieDB.movies[filmName] = filmGrade;
// // 		console.log(`done`);
// // 	} else {
// // 		console.log(`error`);
// // 		i--;
// // 	}
// // }

// // if (personalMovieDB.count < 10) {
// // 	alert(`Просмотрено довольно мало фильмов`);
// // } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
// // 	alert(`Вы классический зритель`);
// // } else if (personalMovieDB.count > 30) {
// // 	alert(`Вы киноман`);
// // } else {
// // 	alert(`error`);
// // }

// // console.log(personalMovieDB);

// // const numberOfFilms = prompt("How many films have you watched?", "");

// // const personalMovieDB = {
// // 	count: numberOfFilms,
// // 	movies: {},
// // 	actors: {},
// // 	genres: [],
// // 	privat: false,
// // };

// // вариант с циклом for
// // for (let i = 0; i < 2; i++) {
// // 	const filmName = prompt("Name one of the last movie you watched?", ""),
// // 		filmGrade = prompt("What is your grade for this film?", "");

// // 	if (
// // 		filmName != null &&
// // 		filmGrade != null &&
// // 		filmName != "" &&
// // 		filmGrade != "" &&
// // 		filmName.length < 50
// // 	) {
// // 		personalMovieDB.movies[filmName] = filmGrade;
// // 		console.log(`done`);
// // 	} else {
// // 		console.log(`error`);
// // 		i--;
// // 	}
// // }

// // вариант с циклом while
// // let i = 0;

// // while (i < 2) {
// // 	const filmName = prompt("Name one of the last movie you watched?", ""),
// // 		filmGrade = prompt("What is your grade for this film?", "");

// // 	if (
// // 		filmName != null &&
// // 		filmGrade != null &&
// // 		filmName != "" &&
// // 		filmGrade != "" &&
// // 		filmName.length < 50
// // 	) {
// // 		personalMovieDB.movies[filmName] = filmGrade;
// // 		console.log(`done`);
// // 	} else {
// // 		console.log(`error`);
// // 		i--;
// // 	}
// // 	i++;
// // }

// // вариант с циклом do..while
// // let i = 0;

// //  do {
// // 	const filmName = prompt("Name one of the last movie you watched?", ""),
// // 		filmGrade = prompt("What is your grade for this film?", "");

// // 	if (
// // 		filmName != null &&
// // 		filmGrade != null &&
// // 		filmName != "" &&
// // 		filmGrade != "" &&
// // 		filmName.length < 50
// // 	) {
// // 		personalMovieDB.movies[filmName] = filmGrade;
// // 		console.log(`done`);
// // 	} else {
// // 		console.log(`error`);
// // 		i--;
// // 	}
// // 	i++;
// // }
// // while (i < 2);

// // if (personalMovieDB.count < 10) {
// // 	alert(`Просмотрено довольно мало фильмов`);
// // } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
// // 	alert(`Вы классический зритель`);
// // } else if (personalMovieDB.count > 30) {
// // 	alert(`Вы киноман`);
// // } else {
// // 	alert(`error`);
// // }

// // console.log(personalMovieDB);

// // function showFirstMessage(text) {
// // 	console.log(text);
// // }

// // showFirstMessage(`Hi`);

// // function ret() {
// // 	let num = 50;
// // 	return num;
// // }

// // let newNum = ret();
// // console.log(newNum);

// // const logger = function() {
// // 	console.log(`Hidcfd`);
// // };
// // logger();

// // const calc = (a, b) => { return a + b };

// // console.log(calc(10, 5));

// // let name = "John";

// // function sayHi() {
// // 	console.log(`Hi ${name}`);
// // }

// // name = "Pete";

// // console.log(sayHi());

// // function createCounter() {
// // 	let counter = 1;
// // 	const myFunction = function () {
// // 		counter = counter + 1;
// // 		return counter;
// // 	};
// // 	return myFunction;
// // }
// // const increment = createCounter();
// // const c1 = increment();
// // const c2 = increment();
// // const c3 = increment();
// // console.log("example increment", c1, c2, c3);

// // let c = 4;
// // function addX(x) {
// // 	return function (n) {
// // 		return n + x;
// // 	};
// // }
// // const addThree = addX(3);
// // let d = addThree(c);
// // let e = addThree(c);
// // console.log("example partial application", d, e);

// // let elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// // elements.map(({ length }) => length);
// // console.log(elements.map(({ length }) => length));

// // function Person() {
// // 	this.age = 0;

// // 	setInterval(function growUp() {
// // 		this.age++;
// // 	}, 1000);
// // }

// // let p = new Person();
// // console.log(p);

// // let usdCurr = 28;
// // let euroCurr = 32;
// // const discount = 0.9;

// // function convert(amount, curr) {
// // 	return
// // 	amount * curr;
// // }

// // function promotion(result) {
// // 	console.log(result * discount);
// // }

// // convert(500, usdCurr);
// // convert(500, euroCurr);

// // let res = convert(500, usdCurr);
// // promotion(res);

// // console.log(convert(500, usdCurr));
// // console.log(convert(500, euroCurr));

// // function test() {
// // 	for (let i = 0; i < 5; i++) {
// // 		console.log(i);
// // 		if (i === 3) return
// // 	}
// // 	console.log('done')
// // }
// // test();

// // function doNothing() {};
// // console.log(doNothing() === undefined);

// //1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// //Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
//В решении вызывать функцию не нужно, программа сделает это за вас.

// //P.S. возвращать - это использовать ключевое слово return.

// // function writeHi(name) {
// // 	return `Hello, ${name}`
// // };

// // let user1 = `Beautifull`

// // console.log(writeHi(user1));

// //2) Создайте функцию, которая принимает в себя 1 аргумент в
// //виде целого числа и возвращает массив из трех чисел:
// //одно на 1 меньше, сам аргумент, и число на 1 больше.

// //Пример: вызов функции returnNeighboringNumbers(5)
// //возвращает массив в виде [4, 5, 6].

// // function showNeighborNumbers(number) {
// // 	return [number - 1, number, number + 1];
// // }

// // console.log(showNeighborNumbers(6));

// //3.

// // function doProgretion(number, times) {
// // 	if (typeof(times) != `number` || times <= 0) {
// // 		return number;
// // 	}

// // 	let str

// // 	for (let i = 1; i <= times; i++) {
// // 		if (i === times) {
// // 			str = str + `${number * i}`;
// // 		} else {
// // 			str += `${number * i}---`;
// // 		}
// // 	}
// // 	return str;
// // }

// // console.log(doProgretion(5, 10));

// // const str = 'test';
// // const arr = [1, 2, 3];

// // console.log(str.length);
// // console.log(arr.length);
// // console.log(str[2]);

// // console.log(str.toUpperCase());
// // console.log(str.toLowerCase());

// // const fruit = "Some fruit";

// // console.log(fruit.indexOf("fruit"));

// // const logg = "Hello world";

// // console.log(logg.slice(-5, -1));
// // console.log(logg.substring(6, 4));

// // console.log(logg.substr(6, 2));

// // const num = 12.2;
// // console.log(Math.round(num));

// // const test = "_12.2px";
// // console.log(parseFloat(test));

// //https://learn.javascript.ru/object#the-for-in-loop
// const user = {};
// user.name = "John";

// user.surname = "Smith";

// user.name = "Pete";

// delete user.name;
// console.log(user);

// //Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// //Должно работать так:

// let schedule = {};

// function isEmpty(obj) {
// 	for (let key in obj) {
// 		return false;
// 	}
// 	return true;
// }

// schedule.name = "today";

// console.log(isEmpty(schedule));

// const user = {
// 	name: "John",
// };

// user.name = "Pete";
// console.log(user);

// //salary
// let salaries = {
// 	John: 100,
// 	Ann: 120,
// 	Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
// 	sum += salaries[key];
// }

// console.log(sum);

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu",
// };

// function multiplyNumeric(menu) {
// 	for (let key in menu) {
// 		if (typeof menu[key] == `number`) {
// 			menu[key] *= 2;
// 		}
// 	}
// }

// multiplyNumeric(menu);
// console.log(menu);

// let user = {
// 	name: "John",
// 	surname: "Smith",

// 	get fullName() {
// 		return `${this.name} ${this.surname}`;
// 	},

// 	set fullName(value) {
// 		[this.name, this.surname] = value.split(" ");
// 	},
// };

// user.fullName = "Baby maybe";
// console.log(user.fullName); // John Smith

// let [firstName, surname] = "Ilya Kantor".split(" ");
// console.log(firstName); // Ilya
// console.log(surname);

// let arr = ["Ilya", "Kantor"];

// let [firstName, surname] = arr;
// console.log(firstName); // Ilya
// console.log(surname);

// const arr = [2, 3, 6, 8, 10];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

// const arr = [2, 3, 6, 8, 10];

// arr.forEach(function (item, i) {
// 	console.log(`${i}: ${item} внутри массива`);
// });

// const str = prompt("товары?", "");
// const products = str.split(", ");
// products.sort();

// console.log(products.join("; "));

// const arr = ['xfgfg', 'aaa', 'qqq', 'ccc'];
// arr.sort();

// console.log(arr);
// console.log(arr.reverse());

// function compareNum(a, b) {
// 	return a-b;
// }

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function () {
		return "Hello";
	},
};

// const jonh = { health: 100 };

//1-й устаревший вариант
//jonh.__proto__ = soldier;

//установить прототип джону от солдата
// Object.setPrototypeOf(jonh, soldier);
// console.log(jonh.sayHello());

// обычно на практике

const jonh = Object.create(soldier);
// console.log(jonh);
// console.log(soldier);
jonh.armor = 200;
console.log(jonh.armor);

console.log(jonh.sayHello());
