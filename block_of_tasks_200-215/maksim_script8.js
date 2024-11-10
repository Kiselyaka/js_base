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