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
