"use strict"
// глава 144
let arr144 = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr144){
    console.log(elem);
}
// глава 145
let obj145 = {x: 1, y: 2, z: 3};
for (let key in obj145) {
	console.log(key); // выведет 'a', 'b', 'c'
}
for (let key in obj145) {
	console.log(obj145[key]); // выведет 1, 2, 3
}
// глава 146
let i_146 = 1;
while(i_146 <= 100){
    console.log(i_146)
    i_146++;
}

let i_146_2 = 11;
while(i_146_2 <= 33){
    console.log(i_146_2);
    i_146_2++;
}

let i_146_3 = 100;
let counter_146 = 0;
while (i_146_3 <= 1000){
    console.log(i_146_3);
    console.log(counter_146);
    i_146_3 = (i_146_3 * 3);
    counter_146++;
}

let num146 = 1; // начальное значение
let iterations146 = 0; // счетчик итераций

while (num146 <= 1000) {
  num146 = num146 * 3;
  iterations146++;
}

console.log('Результат:' + num146);
console.log('Количество итераций:' + iterations146);

// глава 147
for (let i_147_1 = 1; i_147_1 <= 100; i_147_1++ ){
    console.log(i_147_1);
}

for (let i_147_2 = 11; i_147_2 <= 33; i_147_2++){
    console.log(i_147_2);
}

for (let i_147_3 = 0; i_147_3 <= 100; i_147_3 += 2){
    console.log(i_147_3);
}

for (let i_147_4 = 1; i_147_4 <= 99; i_147_4 += 2){
    console.log(i_147_4);
}

for (let i_147_5 = 100; i_147_5 >= 0; i_147_5--){
    console.log(i_147_5);
}
// глава 148
let arr148_1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr148_1.length; i++) {
	console.log(arr148_1[i]);
}

let arr148_2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < (arr148_2.length - 1); i++) {
	console.log(arr148_2[i]);
}

let arr148_3 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr148_3.length - 1; i >= 0; i--) {
	console.log(arr148_3[i]);
}

let arr148_4 = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr148_4.length; i++) {
	console.log(arr148_4[i]);
}
// глава 149
let arr149_1 = [2, 5, 9, 15, 1, 4];
for (let elem of arr149_1) {
	if (elem > 3 && elem < 10) {
		console.log(elem);
	}
}

let obj149_2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let elem in obj149_2) {
    if (obj149_2[elem] % 2 !== 0) {
		console.log(obj149_2[elem]);
	}
}
// глава 150
let res150 = 0;

for (let i = 2; i <= 100; i += 2) {
	res150 += i;
}
console.log(res150);

let sumOdd150 = 0;
for (let i = 1; i < 100; i += 2) {
  sumOdd150 += i;
}
console.log(sumOdd150);

let product150 = 1;
for (let i = 1; i <= 20; i++) {
  product150 *= i;
}
console.log(product150);
// глава 151
let arr151_1 = [2, 5, 9, 3, 1, 4];
let res151_1 = 0;
for (let elem of arr151_1) {
	res151_1 += elem;
}
console.log(res151_1); // искомая сумма

let arr151_2 = [2, 5, 9, 3, 1, 4];
let res151_2 = 0;
for (let elem of arr151_2) {
    if (elem % 2 === 0) {
      res151_2 += elem;
    }
  }  
console.log(res151_2);

let arr151_3 = [2, 5, 9, 3, 1, 4];
let res151_3 = 0;
for (let elem of arr151_3) {
    res151_3 += elem * elem; // или Math.pow(elem, 2)
  }  
console.log(res151_3);

let arr151_4 = [2, 5, 9, 3, 1, 4];
let res151_4 = 1;
for (let elem of arr151_4) {
    res151_4 *= elem;
  }
console.log(res151_4); 
// глава 152
let str152_1 = '';
for (let i = 0; i <= 5; i++) {
	str152_1 += '-';
}
console.log(str152_1); 

let str152_2 = '';
for (let i = 1; i <= 9; i++) {
	str152_2 += i;
}
console.log(str152_2); 

let str152_3 = '';
for (let i = 9; i >= 1; i--) {
	str152_3 += i;
}
console.log(str152_3);

let str152_4 = '';
for (let i = 1; i <= 9; i++) {
	str152_4 += '-';
    str152_4 += i;
}
console.log(str152_4);
// глава 153

for (let i = 10; i <= 1000; i++) {
  let str153 = String(i); // преобразуем число в строку
  console.log(str153[0]); // выводим первую цифру
}

for (let i = 10; i <= 1000; i++) {
  let str153_2 = String(i); // преобразуем число в строку
  let firstDigit_153 = Number(str153_2[0]); // первая цифра
  let secondDigit_153 = Number(str153_2[1]); // вторая цифра
  console.log(firstDigit_153 + secondDigit_153); // выводим сумму
}

for (let i = 10; i <= 1000; i++) {
  let str153_3 = String(i); // преобразуем число в строку
  if (str153_3[0] === '1') { // проверяем первую цифру
    console.log(i); // выводим число
  }
}

for (let i = 10; i <= 1000; i++) {
  let str153_4 = String(i); // преобразуем число в строку
  let firstDigit_153_4 = Number(str153_4[0]); // первая цифра
  let secondDigit_153_4 = Number(str153_4[1]); // вторая цифра
  if (firstDigit_153_4 + secondDigit_153_4 === 5) { // проверяем сумму
    console.log(i); // выводим число
  }
}
// глава 154

let arr154_1 = [1, 2, 3, 0, 4, 5];

for (let elem154_1 of arr154_1) {
  if (elem154_1 === 0) {
    break; // выйдем из цикла, если нашли 0
  }
  console.log(elem154_1);
}

let arr154_2 = [1, 2, 3, -1, 4, 5];
let sum154_2 = 0;

for (let elem154_2 of arr154_2) {
  if (elem154_2 < 0) {
    break; // выйдем из цикла, если нашли отрицательное число
  }
  sum154_2 += elem154_2;
}
console.log('Сумма:', sum154_2);

let arr154_3 = [1, 2, 3, 4, 5];
let position154_3 = -1;

for (let i = 0; i < arr154_3.length; i++) {
  if (arr154_3[i] === 3) {
    position154_3 = i; // запоминаем индекс
    break; // выйдем из цикла после нахождения
  }
}
console.log('Позиция первого числа 3:', position154_3);

let sum154_4 = 0;
let count154_4 = 0;

for (let i = 1; sum154_4 <= 100; i++) {
  sum154_4 += i;
  count154_4++;
}
console.log('Количество целых чисел:', count154_4);