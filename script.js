

// if (num < 50) {
//     console.log("ok")
// } else if (num > 100) {
//     console.log("too much")
// } else {console.log("not today") }


//switch

// const num = "50";

// switch (num) {
// 	case "49":
// 		console.log("false meaning");
// 		break;
// 	case "52":
// 		console.log("too much");
// 		break;
// 	case "50":
// 		console.log("exactly");
// 		break;
// 	default:
// 		console.log("not today");
// 		break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
// console.log("Я сыт!");}

// console.log((hamburger && fries)); 

// const hamburger = 3;
// const fries = 1;
// const cola = 2;

// console.log (hamburger === 3 && cola === 2 && fries)

// let john, mar, ddf, ddd = 'done';

// console.log(john || ddf || mar || ddd);


// const hamburger = 3;
// const fries = 1;
// const cola = 2;
// const nuggets = 5;

// if (hamburger === 4 && cola === 2 || fries && nuggets === 5) {
//     console.log('Мы сыты!');
// } else {console.log('Мы не сыты!');}

// console.log(hamburger === 4 && cola === 2 || fries && nuggets);

// console.log((5 === 5 && 3 > 1) || 5);
// console.log(3>1);

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log((!1 && 2) || !3);

// console.log(25 || (null && !3));

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || (null && !3 && undefined) || 5);

// console.log((5 === 5 && 3 > 1) || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
// 	console.log("Done!");
// } else {console.log("no")}


// let num = 50;

// while (num < 60) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// let num = 50;
// for (let i = 1; i < 15; i++) {
//     console.log(num);
//     num++;
// }


// for (let i = 1; i < 15; i++) {
// 	if (i === 6) {
// 		continue;
// 	}
// 	console.log(i);
// }


// let i = 0;

// for (i = 0; i < 3; i++) {

// 	console.log(i); // 0, 1, 2
// }

// console.log(i);

// for (let i = 0; i < 10; i++) {
// 	if (i % 3) {
// 		console.log(i);
// 	}
// }

// задача\\
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
// 	for (let j = 0; j<i; j++) {
// 		result += '*';
// 	}
	
// 	result += `\n`;

// }
// console.log(result);


// for (let i = 0; i < 3; i++) {
// console.log(i);
// for (let j = 2; j < 8; j++) {
// console.log(j);
// }
// }

//  tryAgain: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 10; j < 15; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 20; k < 25; k++) {
// 			if (k === 22) break tryAgain;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

// let i = 3;

// while (i) {
// 	console.log(i--);
// }

// let i = 0;
// // while (++i < 5) console.log(i);
// while (i++ < 5) console.log(i);

// for (let i = 1; i <= 10; i++) {
// 	if (i%2 != 0) continue;
// 	console.log(i)};

	// for (let i = 0; i < 3; i++) {
	// 	console.log(`number ${i}!`);
	// }

	let i = 0;
	while (i<3) {
		
		console.log(`number ${i}!`)
		i++;
	}

	let answer = +prompt(`Напишите число большее, чем 100?, ''`);
