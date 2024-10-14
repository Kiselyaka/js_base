"use strict"
// глава 80
let obj80 = {1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'};
console.log(obj80);
// глава 81
let obj81 = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
console.log(obj81);
// глава 82
let user82 = {name: 'Максим', surname: 'Киселев', patronymic: 'БимБим'};
console.log(user82['name'], user82['surname'], user82['patronymic']);
// глава 83
let date83 = {year: '2024', month: '10', day: '13'};
console.log([date83.year, date83.month, date83.day].join('-'));
// использовал метод join,чтобы был красивый вывд даты

// глава 84
/*
Дан объект:

let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};
Для каких ключей данного объекта кавычки обязательны, а для каких нет?

Ответ: для 0,2,3
*/

/*
Исправьте ошибки, допущенные в следующем коде:

let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj.1a);
console.log(obj.b2);
console.log(obj.c-c);
console.log(obj.d 4);
console.log(obj.e5);
*/
let obj_84 = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj_84['1a']);
console.log(obj_84.b2);
console.log(obj_84['с-с']);
console.log(obj_84['d 4']);
console.log(obj_84.e5);
// глава 85
let obj85 = {x: 1, y: 2, z: 3};
obj85.x = 1**2;
obj85.y = 2**2;
obj85.z = 3**2;
console.log(obj85);
// глава 86
let obj86 = {};
obj86.a = 1;
obj86.b = 2;
obj86.c = 3;
console.log(obj86);
// глава 87
let obj87 = {7: 'a', 50: 'b', 23: 'c'};
console.log(obj87[7], obj87[23], obj87[50]);
console.log(obj87[7], obj87[50], obj87[23]);
// глава 88
let obj88 = {x: 1, y: 2, z: 3};
let keys88 = Object.keys(obj88);
console.log(keys88);
// глава 89
let obj89 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj89).length);
// глава 90
let obj90 = {x: 1, y: 2, z: 3};
key90 = 'x';
console.log(obj90[key90]);