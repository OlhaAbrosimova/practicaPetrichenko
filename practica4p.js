//т.к. функция становится методом, то отдельно обьявлять переменную numberOfFilms снаружи не нужно, и вообще эта переменная не нужна.

// let numberOfFilms;

// const personalMovieDB = {
// 	count: 0, //сюда записываем вместо numberOfFilms - 0.
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function () {
// 		personalMovieDB.count = +prompt("How many films have you watched?", "");

// 		while (
// 			personalMovieDB.count == "" ||
// 			personalMovieDB.count == null ||
// 			isNaN(personalMovieDB.count)
// 		) {
// 			personalMovieDB.count = +prompt("How many films have you watched?", "");
// 		}
// 	},
// 	rememberMyFilms: function rememberMyFilms() {
// 		for (let i = 0; i < 2; i++) {
// 			const filmName = prompt("Name one of the last movie you watched?", ""),
// 				filmGrade = prompt("What is your grade for this film?", "");

// 			if (
// 				filmName != null &&
// 				filmGrade != null &&
// 				filmName != "" &&
// 				filmGrade != "" &&
// 				filmName.length < 50
// 			) {
// 				personalMovieDB.movies[filmName] = filmGrade;
// 				console.log(`done`);
// 			} else {
// 				console.log(`error`);
// 				i--;
// 			}
// 		}
// 	},
// 	detectPersonalLevel: function () {
// 		if (personalMovieDB.count < 10) {
// 			alert(`Просмотрено довольно мало фильмов`);
// 		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
// 			alert(`Вы классический зритель`);
// 		} else if (personalMovieDB.count > 30) {
// 			alert(`Вы киноман`);
// 		} else {
// 			alert(`error`);
// 		}
// 	},
// 	showMyDB: function (hidden) {
// 		if (!hidden) {
// 			console.log(personalMovieDB);
// 		}
// 	},
// 	writeYourGenres: function () {
// 		//1-й вар 3-й задачи
// 		// for (let i = 1; i <= 3; i++) {
// 		// 	let genre = prompt(`Ваш любимый жанр под номером ${i}`);

// 		// 	if (genre === "" || genre == null) {
// 		// 		console.log("Ничего нет");
// 		// 		i--;
// 		// 	} else {
// 		// 		personalMovieDB.genres[i - 1] = genre;
// 		// 	}
// 		// }
// 		// personalMovieDB.genres.forEach((item, i) => {
// 		// 	console.log(`Любимый жанр ${i + 1} - это ${item}`);
// 		// });

// 		//2-й вариант 3-й задачи
// 		//запускаем цикл 1 раз, но если данные не введены, идет откат назад на 1.
// 		for (let i = 1; i < 2; i++) {
// 			let genres = prompt(
// 				`Введите Ваши любимые жанры через запятую`
// 			).toLowerCase();

// 			if (genres === "" || genres == null) {
// 				console.log("Ничего нет");
// 				i--;
// 			} else {
// 				personalMovieDB.genres = genres.split(", "); //переводим в массив
// 				personalMovieDB.genres.sort(); //сортируем, и что бы сортировалось корректно выше переводим ответ в ловер кейс, т.к. большая буква всегда перебьет маленькую, даже если не по алфавиту.
// 			}
// 		}
// 		personalMovieDB.genres.forEach((item, i) => {
// 			console.log(`Любимый жанр ${i + 1} - это ${item}`);
// 		});
// 	},
// 	toggleVisibleMyDB: function () {
// 		if (personalMovieDB.privat) {
// 			personalMovieDB.privat = false;
// 		} else {
// 			personalMovieDB.privat = true;
// 		}
// 	},
// };

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB);

//CodingExersize13

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5,
		},
		{
			width: 15,
			length: 7,
		},
		{
			width: 20,
			length: 5,
		},
		{
			width: 8,
			length: 10,
		},
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 52000,
};

function isBudgetEnough(data) {
	let square = 0;
	let volume = 0;

	data.shops.forEach(function (shop, index) {
		return (square += shop.width * shop.length);
	});
	volume += square * data.height;

	if (volume * data.moneyPer1m3 < data.budget) {
		return "Бюджета достаточно";
	} else {
		return "Бюджета недостаточно";
	}
}

console.log(isBudgetEnough(shoppingMallData));

//codingexersize14

// const students = [
// 	"Peter",
// 	"Andrew",
// 	"Ann",
// 	"Mark",
// 	"Josh",
// 	"Sandra",
// 	"Cris",
// 	"Bernard",
// 	"Takesi",
// 	"Sam",
// 	"Somebody",
// ];

// function sortStudentsByGroups(arr) {
// 	const a = [],
// 		b = [],
// 		c = [],
// 		rest = [];

// 	arr.sort();

// 	for (let i = 0; i < arr.length; i++) {
// 		if (i < 3) {
// 			a.push(arr[i]);
// 		} else if (i < 6) {
// 			b.push(arr[i]);
// 		} else if (i < 9) {
// 			c.push(arr[i]);
// 		} else {
// 			rest.push(arr[i]);
// 		}
// 	}
// 	return [
// 		a,
// 		b,
// 		c,
// 		`Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
// 	];
// }

// console.log(sortStudentsByGroups(students));

//2-й вариант

const students = [
	"Peter",
	"Andrew",
	"Ann",
	"Mark",
	"Josh",
	"Sandra",
	"Cris",
	"Bernard",
	"Takesi",
	"Sam",
];

function sortStudentsByGroups(arr) {
	arr.sort();
	let arrGroup = [];
	for (let i = 0; i < 3; i++) arrGroup.push(arr.splice(0, 3));
	arrGroup.push(`Оставшиеся студенты: ${!arr.length ? `-` : arr.join(", ")}`);

	return arrGroup;
}

console.log(sortStudentsByGroups(students));
