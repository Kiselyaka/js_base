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

// глава 91
/*
№1⊗jsPmObEAM

Исправьте ошибку, допущенную в следующем коде:

let obj = {x: 1, y: 2, z: 3};
console.log(obj[x]);
*/
let obj91_1 = {x: 1, y: 2, z: 3};
console.log(obj91_1['x']);

/*
№2⊗jsPmObEAM

Исправьте ошибку, допущенную в следующем коде:

let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj['key']);
*/
let obj91_2 = {x: 1, y: 2, z: 3};
let key91_2 = 'x';
console.log(obj91_2[key91_2]);

// глава 92
/*№1⊗jsPmObPAM

Исправьте ошибку, допущенную в следующем коде:

let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj.prop);
*/

let obj92_1 = {x: 1, y: 2, z: 3};
let prop92_1 = 'x';
console.log(obj92_1.prop92_1);

/*
№2⊗jsPmObPAM

Исправьте ошибку, допущенную в следующем коде:

let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj['prop']);
*/

let obj92_2 = {x: 1, y: 2, z: 3};
let prop92_2 = 'x';
console.log(obj92_2[prop92_2]);
// глава 93
/*
№1⊗jsPmObCP

В следующем коде ключ должен был взяться из переменной. Исправьте допущенную ошибку:

let key = 'x';

let obj = {
	key: 1,
	y: 2,
	z: 3
};
*/
let key93_1 = 'x';

let obj93_1 = {
    [key93_1]: 1, 
    y: 2,
    z: 3
};
console.log(obj93_1); 

/*
№2⊗jsPmObCP

Дан объект:

let obj = {
	x: 1,
	y: 2,
	z: 3
};
Даны переменные:

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
Сделайте так, чтобы ключи объекта брались из этих переменных
*/
let obj93_2 = {
    [key1_93]: 1, // Используем переменную key1 как ключ
    [key2_93]: 2, // Используем переменную key2 как ключ
    [key3_93]: 3  // Используем переменную key3 как ключ
};

let key1_93 = 'x';
let key2_93 = 'y';
let key3_93 = 'z';

console.log(obj93_2);
// глава 94

/*
№1⊗jsPmObOI

Скажите, что выведется в консоль в результате выполнения следующего кода:

let obj = {x: 1, y: 2, z: 3};

console.log('x' in obj);
console.log('w' in obj);
Ответ: выведет true
	   вывелет false
*/
// глава 95
/*
№1⊗jsPmObOD

Скажите, что выведется в консоль в результате выполнения следующего кода:

let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj);
Ответ: false
*/
// глава 96
/*
№1⊗jsPmObTp

Не запуская код, определите, что выведется в консоль:

console.log( typeof {x: 1, y: 2, z: 3} );
*/

//Ответ: object

/*
№2⊗jsPmObTp

Не запуская код, определите, что выведется в консоль:

console.log( typeof {} );
*/

//Ответ: object

/*
№3⊗jsPmObTp

Не запуская код, определите, что выведется в консоль:

let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj );
*/

//Ответ: object

/*
№4⊗jsPmObTp

Не запуская код, определите, что выведется в консоль:

let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj['x'] );
*/

//Ответ: number

// глава 97

/*
№1⊗jsPmObAAO

Не запуская код, определите, что выведется на экран в консоль:

console.log( typeof {x: 1, y: 2, z: 3} );
*/

//Ответ: object

/*
№2⊗jsPmObAAO

Не запуская код, определите, что выведется в консоль:

console.log( typeof [1, 2, 3] );
*/

//Ответ: object

/*
№3⊗jsPmObAAO

Не запуская код, определите, что выведется в консоль:

let arr = [1, 2, 3];
console.log( typeof arr );
*/

//Ответ: object

/*
№4⊗jsPmObAAO

Не запуская код, определите, что выведется в консоль:

let arr = [1, 2, 3];
console.log( typeof arr[0] );
*/

//Ответ: number

/*
№5⊗jsPmObAAO

Не запуская код, определите, что выведется в консоль:

let arr = ['1', '2', '3'];
console.log( typeof arr[0] );
*/

//Ответ: string

// глава 98
/*
№1⊗jsPmObDAO

Не запуская код, определите, что выведется на экран в консоль:

console.log( Array.isArray([1, 2, 3]) );
*/

// Ответ:true

/*
№2⊗jsPmObDAO

Не запуская код, определите, что выведется на экран в консоль:

console.log( Array.isArray({x: 1, y: 2, z: 3}) );
*/

// Ответ:false

// глава 100
/*
/*№1⊗jsPmObPBR

Не запуская код, определите, что выведется в консоль:

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr2);
*/

// Ответ:["a", 2, 3]

/*
№2⊗jsPmObPBR

Не запуская код, определите, что выведется в консоль:

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[1] = 'b';

console.log(arr1);
*/

// Ответ: ["a", "b", 3]

/*
№3⊗jsPmObPBR

Не запуская код, определите, что выведется в консоль:

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[0] = 'b';

console.log(arr2);
*/

//Ответ: ["b", 2, 3]
// глава 102
const arr102 = [1, 2, 3, 4, 5];
const res102 = arr102[1] + arr102[2];

console.log(res102);
// глава 103
let obj103_1 = {x: 1, y: 2, z: 3};
console.log(obj103_1['x']);

let obj103_2 = {x: 1, y: 2, z: 3};
let key103_2 = 'x';
console.log(obj103_2[key103_2]);

let obj103_3 = {x: 1, y: 2, z: 3};
let sum103 = obj103_3['x'] + obj103_3['y'] + obj103_3['z'];
console.log(sum103);

let obj104 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj104).length);