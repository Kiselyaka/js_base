"use strict";
// глава 6
alert('text');
/* глава 11 
многострочный комментарий
*/
// глава 13
let num = 123;
alert(num);
// глава 14
let a1 = 1, b1 = 2, c1 = 3;
let a2, b2, c2; // объявляем все 3 переменные
// Присваиваем переменным значения:
a2 = 1;
b2 = 2;
c2 = 3;
// глава 15
let a;    // объявляем переменную

a = 10;    // записываем в нее значение 1
alert(a); // выведет 1

a = 20;    // записываем теперь значение 2, затирая значение 1
alert(a); 
// глава 17
let sum17 = 1+2+3;
alert(sum17);
// глава 18
let per18_a = 10;
let per18_b = 2;
let sumpe18_1 = per18_a + per18_b;
let diff18_1 = per18_a - per18_b;
let comp18_1 = per18_a * per18_b;
let divis18_1 = per18_a / per18_b;
//alert(diff18_1 + '' + comp18_1 + '' + sumpe18_1 + '' + diff18_1);
alert('Сумма: ' + sumpe18_1 + ' ' +
    'Разность: ' + diff18_1 + ' ' +
    'Произведение: ' + comp18_1 + ' ' +
    'Частное: ' + divis18_1);

let per18_2a = 10;
let per18_2d = 5;
let result;
alert(result = per18_2a + per18_2d);

let per18_3a = 1;
let per18_3b = 2;
let per18_3c = 3;
let sum18_3;
alert(sum18_3 = per18_3a + per18_3b + per18_3c)

let per18_4a = 10;
let per18_4b = 5;
let per18_4c = per18_4a - per18_4b;
let per18_4d = 7;
let per18_4result = per18_4d + per18_4c;
alert(per18_4result);
// глава 22
let per22_a = 1.5;
let per22_b = 0.75;
alert(per22_a+per22_b);
// глава 23
let per23_a = -100;
let per23_b = 1;
alert('Отрицательное: ' + per23_a + ' ' +
    'Положительное с - впереди: ' + -per23_b);
// глава 25
let per25_a = 13;
let per25_b = 5;
alert(per25_a % per25_b);
// глава 26
let per26_a = 2;
alert(per26_a ** 10);
// глава 28
let per28_name_fname = 'Киселев Максим';
alert(per28_name_fname);
// глава 29
let per29_1 = '!!!';
alert(per29_1);
let per29_java = 'java';
let per29_script = 'script';
alert(per29_java + per29_script);
let per29_hello = 'hello';
let per29_world = 'world';
alert(per29_hello + " " + per29_world);
// глава 30
let per30_primer = 'bim-bim';
alert('Количество строк в переменной: ' + per30_primer.length);
// глава 31 
let str1_31 = 'xxx';
let str2_31 = 'yyy';
let txt_31  = `aaa ${str1_31} bbb ${str2_31} ccc`;
alert(txt_31);
// глава 32
let str_res_32 = `a
b
c
`;
alert(str_res_32);
// глава 34
let per_34;
alert(per_34);
// глава 35
let per_35 = null;
alert(per_35);
// глава 36
let per_36_true = true;
let per_36_false = false;
alert('Переменная со значением true: ' + per_36_true
    +' Переменная со значением false: ' + per_36_false);
// глава 37
let str1_37 = 'abc';
let str2_37 = 'def';
alert(str1_37 * str2_37);
// глава 38

//alert(10 / 0);
//alert(-10 / 0);

// глава 39 
let per_39_1 = 18;
let [per_39_2a, per_39_2b, per_39_2c] = [1, 2, 3];
console.log(per_39_1);
console.log(per_39_2a, per_39_2b, per_39_2c);
// глава 40
console.log(123);               // число
console.log('Hello, world!');   // строка
console.log(true);              // булевое
console.log(null);              // Null
console.log(undefined);         // Undefined
console.log({});                // пустой объект
console.log([]);                // массив
// глава 41

//alert(er_for41);
//проверил,работает - выдает ошибку

// глава 42
const PI = 3.14;
let radius_for41 = 2;
let per_lenth42 = PI * radius_for41 ** 2;
alert(per_lenth42);
// глава 44

/*№1⊗jsPmBsCTN

Дана переменная a со значением '10' и переменная b со значением '20'. Сложите данные переменные как числа.
Ответ: 
*/
let str_a44 = '10'
let str_b44 = '20'
alert(Number(str_a44) + Number(str_b44));
/*
№2⊗jsPmBsCTN

Не запуская код, определите, что выведется на экран:

alert( Number('2') + Number('3') );
Ответ: 5
№3⊗jsPmBsCTN

Не запуская код, определите, что выведется на экран:

alert( 2 + Number('3') );
Ответ: 5
№4⊗jsPmBsCTN

Не запуская код, определите, что выведется на экран:

alert( '2' + Number('3') );
Ответ: 23
*/

// глава 45
let a_45 = +'2';
let b_45 = +'3';
alert(a_45 + b_45); 
// глава 47
let per_47a1 = parseFloat('5px');
let per_47b1 = parseFloat('6px');
alert(per_47a1 + per_47b1);

let per_47a2 = parseFloat('5.5px');
let per_47b2 = parseFloat('6.25px');
alert(per_47a2 + per_47b2);

let per_47a3 = parseFloat('5.5px');
let per_47b3 = parseFloat('6.25px');
alert(per_47a3 + per_47b3 + 'px');
// глава 48
let per_48a1 = 120;
let per_48b1 = 240;
alert(String(per_48a1) + String(per_48b1));
// глава 49
let per49_1 = 12345;
alert(String(per49_1).length);

let per49_2a = 873;
let per49_2b = 4326;
let str49_2a = String(per49_2a); 
let str49_2b = String(per49_2b);

alert(str49_2a.length + str49_2b.length);
// глава 52
let str52_1 = 'abcde';
let [ num_contstr_52a, num_contstr_52c, num_contstr_52e ]= [0, 2, 4];
alert(str52_1[num_contstr_52a] + ' ' + str52_1[num_contstr_52c] + ' ' + str52_1[num_contstr_52e]);

let str52_2 = 'abcde';
let [num_contstr_52_2a, num_contstr_52_2b, num_contstr_52_2c, num_contstr_52_2d, num_contstr_52_2e] = [0, 1, 2, 3, 4];
alert(str52_2[num_contstr_52_2e] + ' ' + str52_2[num_contstr_52_2d] + ' ' + str52_2[num_contstr_52_2c]+ ' ' + str52_2[num_contstr_52_2b] + ' ' + str52_2[num_contstr_52_2a]);

let str52_3 = 'abcde';
let number_str52_3 = 2;
alert(str52_3[number_str52_3]);
// глава 54
let str54 = 'abobus';
alert(str54[str54.length - 1] + ' ' + str54[str54.length - 2] + ' ' + str54[str54.length - 3]);
// глава 55
let str55 = '12345';
alert(Number(str55[0]) + Number(str55[1]) + Number(str55[2]) + Number(str55[3]) + Number(str55[4]));
// глава 56
let num56 = String(12345);
alert(Number(num56[0]) + Number(num56[1]) + Number(num56[2]) + Number(num56[3]) + Number(num56[4]));

alert((num56[0]) * (num56[1]) * (num56[2]) * (num56[3]) * (num56[4]));

alert((num56[4]) + (num56[3]) + (num56[2]) + (num56[1]) + (num56[0]));
// глава 58
let num_58 = 47;
num_58 += 7;
num_58 -= 18;
num_58 *= 10;
num_58 /= 15;
alert(num_58);
// глава 59
let num_59 = 10;
num_59++;
num_59++;
num_59--;
alert(num_59);
// глава 61
alert(0.1 * 0.2);

alert(0.3 - 0.1);
// глава 62
alert('Ваш возраст: ' + prompt('Ваш возраст?'));
// глава 63
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
alert(Number(num1) + Number(num2)); 

let side_63 = Number(prompt('Введите значение стороны квадрата?'));
alert('Площадь квадрата равна: ' + (side_63 ** 2)  );

let height_63 = Number(prompt('Введите значение высоты прямоугольника?'));
let width_63 = Number(prompt('Введите значение ширины прямоугольника?'));
alert('Площадь прямоугольника равна: ' + (height_63 * width_63));
// глава 64
let str64_1 = 'bim-bim';
document.write('<b>' + str + '</b>');

let str64_2 = 'bom-bom';
document.write('<i>' + str64_2 + '</i>');

let str64_3 = 'text';
document.write('<i>' + str64_3 + '</i>');

document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');

// глава 65
