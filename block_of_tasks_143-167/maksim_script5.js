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