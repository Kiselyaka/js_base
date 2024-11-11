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