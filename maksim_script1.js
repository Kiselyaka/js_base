// глава 6
"use strict";
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
