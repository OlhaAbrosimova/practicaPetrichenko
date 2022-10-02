// let x = 5;
// alert(++x);

// console.log([] + false - null + true);
// console.log([] + false);  //false, а typeof() string
// console.log([] + false - null);  //NaN, а typeof() number
// console.log([] + false - null + true);  //NaN

// let y = 1;
// let x = (y = 2);
// alert(x); //2

// console.log([] + 1 + 2); //12

// alert("1"[0]); //1

// console.log(2 && 1 && null && 0 && undefined); //null

// console.log(!!(1 && 2));
// console.log(1 && 2); //da

// console.log("37"+0);
// alert(null || (2 && 3) || 4); //3

// a = [1, 2, 3];
// b = [1, 2, 3];
// if (a == b) {
// 	console.log(`ok`);
// } else {
// 	console.log(`not ok`);
// } //net

// alert(+"Infinity"); //infinity

// console.log("ажик" > "Фблоко"); //net

// console.log(0 || "" || 2 || undefined || true || falsе);    //2

const restorantData = {
	menu: [
		{
			name: "Salad Caesar",
			price: "14$",
		},
		{
			name: "Pizza Diavola",
			price: "9$",
		},
		{
			name: "Beefsteak",
			price: "17$",
		},
		{
			name: "Napoleon",
			price: "7$",
		},
	],
	waitors: [
		{ name: "Alice", age: 22 },
		{ name: "John", age: 24 },
	],
	averageLunchPrice: "20$",
	openNow: true,
};

function isOpen(prop) {
	let answer = "";
	prop ? (answer = "Открыто") : (answer = "Закрыто");

	return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < average) {
		console.log(+fDish.price.slice(0, -1));
		console.log(+sDish.price.slice(0, -1));

		return "Цена ниже средней";
	} else {
		return "Цена выше средней";
	}
}

console.log(
	isAverageLunchPriceTrue(
		restorantData.menu[3],
		restorantData.menu[1],
		restorantData.averageLunchPrice.slice(0, -1)
	)
);



function transferWaitors(data) {
	const copy = Object.assign({}, data);

	// copy.waitors[0] = { name: "Mike", age: 32 };
	return copy;
}

console.log(transferWaitors(restorantData));
