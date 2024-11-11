"use strict"
// глава 200

function func() {
	console.log('Киселев Максим');
}
func();

function sum_of_1_100() {
    let sum = 0;
    for (let index = 1; index <= 100; index++) {
        sum += index;
    }
    console.log(sum);
}
sum_of_1_100();

// глава 201

function func_3_201(num_201) {
	console.log(Math.pow(num_201, 3));
}
func_3_201(3);

function plus_or_minus(number_pm) {
    if (number_pm > 0){
        console.log("+++");
    }
    else{
        console.log("---");
    }
}
plus_or_minus(-23);

// глава 202

function func_sum(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
func_sum(1, 2, 3);

// глава 203

function func_203(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func_203(param1, param2, param3);

// глава 204

// №1⊗jsPmFBOP

// Дана функция:

// function func(num = 5) {
// 	console.log(num * num);
// }
// Эта функция вызывается следующим образом:

// func(2);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

// Ответ:4
//       9
//       25


// №2⊗jsPmFBOP

// Дана функция:

// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// Эта функция вызывается следующим образом:

// func(2, 3);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

// Ответ:5
//       3
//       0

// глава 205

function cube(num) {
    return num ** 3;
}
let res205_1 = cube(3); 
console.log(res205_1);


function sqrt(num) {
    return Math.sqrt(num);
}
let res1_205 = sqrt(3); 
let res2_205 = sqrt(4); 
let sum205 = Math.floor(res1_205 + res2_205); 
console.log(sum205);

// глава 206
function sqrt206_1(num) {
    return Math.sqrt(num);
}
function round206_1(num) {
    return num.toFixed(3);
}
let result206_1 = round206_1(sqrt206_1(2));
console.log(result206_1);


function sqrt206_2(num) {
    return Math.sqrt(num);
}
function sum206_2(num1, num2, num3) {
    return num1 + num2 + num3;
}
let res_206_2 = sum206_2(sqrt206_2(2), sqrt206_2(3), sqrt206_2(4));
console.log(res_206_2);


function round206_3(num) {
    return num.toFixed(3);
}
let res206_3 = round206_3(sum206_2(sqrt206_2(2), sqrt206_2(3), sqrt206_2(4)));
console.log(res206_3);

// глава 207

// №1⊗jsPmFBRN

// Что выведется в консоль в результате выполнения следующего кода:

// function func(num) {
// 	return num;
	
// 	let res = num ** 2;
// 	return res;
// }

// console.log( func(3) );
// Объясните почему.

// выыедет 3,тк нельзя в данном коде вернуть несколько значений

// №2⊗jsPmFBRN

// Что выведется в консоль результате выполнения следующего кода:

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }

// console.log( func(10) );
// console.log( func(-5) );
// Объясните почему.

// в первом вызове происходит выполнение второго условия и в итоге выведет 100
// во втором вызове происходит выполнение первого условия и в итоге выведет -5 по модулю 

// №3⊗jsPmFBRN

// Что выведется в консоль результате выполнения следующего кода:

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
	
// 	return num ** 2;
// }

// console.log( func(10) );
// console.log( func(-5) );
// Объясните почему.

// выведет в первом случае 100, тк не выполняется условие if
// выведет во втром случае -5 по модулю

// глава 208

// №1⊗jsPmFBRL

// Что выведется в консоль в результате выполнения следующего кода:

// function func(num) {
// 	let sum = 0;
	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }

// console.log( func(5) );
// Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

function func208(num) 
{
	let sum208 = 0;
	
	for (let i = 1; i <= num; i++) {
		sum208 += i;
	}
    return sum208;
}
console.log( func208(5) );

// глава 209

function divideUntilLessThanTen(num) {
    let iterations = 0;
    while (num >= 10) {
        num /= 2;
        iterations++;
    }
    return iterations;
}

let result209 = divideUntilLessThanTen(100);
console.log(result209);

// глава 210

// Дана следующая функция:

// function func(num1, num2) {
// 	let res;
	
// 	if (num1 > 0 && num2 > 0) {
// 		res = num1 * num2;
// 	} else {
// 		res = num1 - num2;
// 	}
	
// 	return res;
// }

// console.log(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории

function func210_1(num1, num2) {
    return (num1 > 0 && num2 > 0) ? num1 * num2 : num1 - num2;
}
console.log(func210_1(3, 4)); 

// глава 111

function areAllEven(arr) {
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            return false;
        }
    }
    return true;
}
console.log(areAllEven([2, 4, 6, 8])); // true
console.log(areAllEven([2, 3, 6, 8])); // false


function areAllDigitsOdd(num) {
    let digits = num.toString().split('');
    for (let digit of digits) {
        if (parseInt(digit) % 2 === 0) {
            return false;
        }
    }
    return true;
}
console.log(areAllDigitsOdd(13579)); // true
console.log(areAllDigitsOdd(13578)); // false


function hasConsecutiveDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}
console.log(hasConsecutiveDuplicates([1, 2, 3, 3, 4])); // true
console.log(hasConsecutiveDuplicates([1, 2, 3, 4, 5])); // false

