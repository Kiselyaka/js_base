"use strict";
// глава 68
let arr_68 = [1, 2, 3];
alert(arr_68);
console.log(arr_68);

let arr_str68 = ['1', '2', '3'];
alert(arr_str68);
console.log(arr_str68);
// глава 69
let arr69_1 = ['1', '2', '3'];
console.log(arr69_1[0]); 
console.log(arr69_1[1]); 
console.log(arr69_1[2]); 

let arr69_2 = [1, 2, 3];
console.log(arr69_2[0]); 
console.log(arr69_2[1]); 
console.log(arr69_2[2]); 

let arr69_3 = [1, 2, 3];
alert(arr69_3[0] + arr69_3[1] + arr69_3[2]);

let arr69_4 = ['a', 'b', 'c', 'd'];
alert(String(arr69_4[0] + '+' + arr69_4[1] + '+' + arr69_4[2] + '+' + arr69_4[3]));
// глава 70
let arr70_1 = [1, 3, 4, 67, '2', 'aboba'];
console.log(arr70_1.length);

let arr70_2 = [3, 4, 5, 'haha', '7', 'abobus'];
console.log(arr70_2[arr70_2.length - 1]);
// глава 71
let arr71 = ['a', 'b', 'c'];

arr71[0] = '1';
arr71[1] = '2';
arr71[2] = '3';
console.log(arr71);
// глава 72
let arr_72 = [1, 2, 3];

arr_72[0] += 3;
arr_72[1] += 3;
arr_72[2] += 3;
console.log(arr_72);
// глава 73
let arr_73 = [1, 2, 3];

arr_73[0]++;
++arr_73[1];
arr_73[2]++;
console.log(arr_73);
// глава 74
let arr74_1 = [];

arr74_1[0] = 1;
arr74_1[1] = 2;
arr74_1[2] = 3;
console.log(arr74_1);

let arr74_2 = [1, 2, 3];

arr74_2[3] = 4;
arr74_2[4] = 5;
console.log(arr74_2);
// глава 75
let arr75 = [];

arr75[3] = 'a';
arr75[8] = 'b';
console.log(arr75.length);
// глава 76
let arr76_1 = [];
arr76_1.push(1);
arr76_1.push(2);
arr76_1.push(3);
console.log(arr76_1);

let arr76_2 = [1, 2, 3];
arr76_2.push(4);
arr76_2.push(5);
console.log(arr76_2);
// глава 77
let arr77_1 = ['a', 'b', 'c'];
let key77_1 = 2;
console.log(arr77_1[key77_1]);

let arr77_2 = [1, 2, 3, 4, 5];
let key1_77 = 1;
let key2_77 = 2;
console.log(arr77_2[key1_77] + arr77_2[key2_77]);
// глава 78
let arr78 = ['a', 'b', 'c', 'd', 'e'];
alert(arr78.length);
console.log(arr78);
delete arr78[1];
delete arr78[3];
console.log(arr78);
alert(arr78.length);
// 79
/*
Код должен вывести последний элемент массива:
let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length]);
*/
let arr79_1 = [1, 2, 3, 4, 5];
console.log(arr79_1[arr79_1.length - 1]);
/*
Код должен найти сумму элементов массива:
let arr = [1, 2, 3, 4, 5];
console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[5]);
*/
let arr79_2 = [1, 2, 3, 4, 5];
console.log(arr79_2[0] + arr79_2[1] + arr79_2[2] + arr79_2[3] + arr79_2[4]);
/*
Код должен вывести длину массива:
let arr = {1, 2, 3, 4, 5};
console.log(arr.length]);
*/
let arr79_3 = [1, 2, 3, 4, 5];
console.log(arr79_3.length);
/*
Код должен вывести длину массива:
let arr = [1, 2, 3, 4, 5];
console.log(arr.lenght);
*/
let arr79_4 = [1, 2, 3, 4, 5];
console.log(arr79_4.length);