"use strict"
// глава 105
let test105 = 2;
if (test105 > 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
if (test105 < 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
if (test105 >= 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
if (test105 <= 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
// глава 106
let per106 = 10;
if (per106 == 0) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}
// глава 107
let test107 = 9;

if (test107 != 0) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}
// глава 108
let test1_108a_1 = 1;
let test2_108b_1 = 2;

if (test2_108b_1 > test1_108a_1) {
	console.log(test2_108b_1); // сработает это
} else {
	console.log(test1_108a_1);
}

let test1_108a_2 = 1;
let test2_108b_2 = 2;
if (test1_108a_2 == test2_108b_2) {
	console.log('значения равны');
} else {
	console.log('значения не равны'); 
}
// глава 109
let test1_109a_2 = 'abc';
let test2_109b_2 = 'abc';
if (test1_109a_2 == test2_109b_2) {
	console.log('строки равны');
} else {
	console.log('строки не равны'); 
}
// глава 110
let test1_110a_2 = '123';
let test2_110b_2 = 123;
if (test1_110a_2 == test2_110b_2) {
	console.log('число и строка равны');
} else {
	console.log('число и строка не равны'); 
}
// глава 111

// №1⊗jsPmCdVTE

// Не запуская код, определите, что выведется в консоль:

// let test1 = '3';
// let test2 = '3';
		
// if (test1 == test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №2⊗jsPmCdVTE

// Не запуская код, определите, что выведется в консоль:

// let test1 = '3';
// let test2 = '3';
		
// if (test1 === test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++ 

// №3⊗jsPmCdVTE

// Не запуская код, определите, что выведется в консоль:

// let test1 = 3;
// let test2 = '3';
		
// if (test1 == test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №4⊗jsPmCdVTE

// Не запуская код, определите, что выведется в консоль:

// let test1 = 3;
// let test2 = '3';
		
// if (test1 === test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №5⊗jsPmCdVTE

// Не запуская код, определите, что выведется в консоль:

// let test1 = 3;
// let test2 = 3;
		
// if (test1 === test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// глава 112

// №1⊗jsPmCdVTIe
// Не запуская код, определите, что выведется в консоль:

// let test1 = '3';
// let test2 = '3';
		
// if (test1 != test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №2⊗jsPmCdVTIe

// Не запуская код, определите, что выведется в консоль:

// let test1 = '3';
// let test2 = '3';
		
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №3⊗jsPmCdVTIe

// Не запуская код, определите, что выведется в консоль:

// let test1 = 3;
// let test2 = '3';
		
// if (test1 != test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №4⊗jsPmCdVTIe

// Не запуская код, определите, что выведется в консоль:

// let test1 = 3;
// let test2 = '3';
		
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №5⊗jsPmCdVTIe

// Не запуская код, определите, что выведется в консоль:

// let test1 = 3;
// let test2 = 2;
		
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// глава 113

let num113  = 3;

if (num113 > 0 && num113 < 5) {
	console.log('+++');
} else {
	console.log('---');
}

let num113_2 = 10;

if (num113_2 >= 10 && num113_2 < 20) {
	console.log('+++');
} else {
	console.log('---');
}

let num113_3 = 1;
let num113_3b = 2;
if (num113_3 <= 1 && num113_3b >= 3) {
	console.log('+++');
} else {
	console.log('---');
}

// глава 114

// №1⊗jsPmCdLOr

// Не запуская код определите, что выведется в консоль:

// let num1 = -10;
// let num2 = -10;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №2⊗jsPmCdLOr

// Не запуская код определите, что выведется в консоль:

// let num1 = 0;
// let num2 = 0;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++ 

// №3⊗jsPmCdLOr

// Не запуская код определите, что выведется в консоль:

// let num1 = 0;
// let num2 = 5;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++ 

// №4⊗jsPmCdLOr

// Не запуская код определите, что выведется в консоль:

// let num1 = 5;
// let num2 = 5;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++ 

// №5⊗jsPmCdLOr

// Не запуская код определите, что выведется в консоль:

// let num1 = -5;
// let num2 = 15;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №6⊗jsPmCdLOr

// Не запуская код определите, что выведется в консоль:

// let num = 1;

// if (num == 0 || num == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №7⊗jsPmCdLOr

// Не запуская код определите, что выведется в консоль:

// let num = 2;

// if (num == 0 || num == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №8⊗jsPmCdLOr

// Не запуская код определите, что выведется в консоль:

// let num = 2;

// if (num == 0 || num == 1 || num == 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// глава 115 
let num115 = 3;
if (num115 == 0 || num115 > 1 && num115 < 5 ) {
	console.log('+++');
} else {
	console.log('---');
}
// num115 > 1 && num115 < 5 - это сначала
// num115 == 0 || ... - потом это

// глава 116

// №1⊗jsPmCdCG

// В приведенном ниже коде укажите приоритет операций в явном виде:

// let num = 3;
		
// if (num > 5 && num < 10 || num == 20) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
let num116_1 = 3;
		
if ((num116_1 > 5 && num116_1 < 10) || num116_1 == 20) {
	console.log('+++');
} else {
	console.log('---');
}

// №2⊗jsPmCdCG

// В приведенном ниже коде укажите приоритет операций в явном виде:

// let num = 3;
		
// if (num > 5 || num > 0 && num < 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

let num116_2 = 3;
		
if (num116_2 > 5 || (num116_2 > 0 && num116_2 < 3)) {
	console.log('+++');
} else {
	console.log('---');
}

// №3⊗jsPmCdCG

// В приведенном ниже коде укажите приоритет операций в явном виде:

// let num = 3;
		
// if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
let num116_3 = 3;
		
if (num116_3 == 9 || (num116_3 > 10 && num116_3 < 20) || (num116_3 > 20 && num116_3 < 30)) {
	console.log('+++');
} else {
	console.log('---');
}
// глава 117
let num117_1 = 3;
let num117_2 = 10;
if (!(num117_1 >= 0 || num117_2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}

// глава 118
let test118 = true;

if (test118 === true) {
	console.log('+++');
} else {
	console.log('---');
}
if (test118 === false) {
	console.log('+++');
} else {
	console.log('---');
}

// глава 119

// №1⊗jsPmCdCWB

// Вспомните и напишите, какие значения при приведении к логическому типу дают false.

/*Ответ:
false (ложь); 
"" или '' (пустая строка); 
NaN (специальный числовой тип данных, который обозначает «не число»); 
0 (число ноль); 
null («пустое» значение); 
undefined («неопределённое» значение). 
*/

// №2⊗jsPmCdCWB

// Не запуская код, определите, что выведется в консоль:

// let test = 1;
		
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №3⊗jsPmCdCWB

// Не запуская код, определите, что выведется в консоль:

// let test = 0;
		
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №4⊗jsPmCdCWB

// Не запуская код, определите, что выведется в консоль:

// let test = 1;
		
// if (test == false) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №5⊗jsPmCdCWB

// Не запуская код, определите, что выведется в консоль:

// let test = 1;
		
// if (test != true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №6⊗jsPmCdCWB

// Не запуская код, определите, что выведется в консоль:

// let test = '';
		
// if (test == false) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №7⊗jsPmCdCWB

// Не запуская код, определите, что выведется в консоль:

// let test;
		
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №8⊗jsPmCdCWB

// Не запуская код, определите, что выведется в консоль:

// let test = 3 * 'a';
		
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// глава 120

let test120 = true;

if (test120) {
	console.log('+++');
} else {
	console.log('---');
}
// глава 121
let test121_a = true;

if (!test121_a) {
	console.log('+++');
} else {
	console.log('---');
}
let test121_b = true;

if (test121_b) {
	console.log('+++');
} else {
	console.log('---');
}

let test121_c = true;

if (test121_c) {
	console.log('+++');
} else {
	console.log('---');
}
// глава 122

// №1⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = 3;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №2⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = 'abc';

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №3⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = '';

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №4⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = 3 * 'abc';

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №5⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = null;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №6⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = false;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №7⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №8⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = 0;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: ---

// №9⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = '0';

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// №10⊗jsPmCdShCh

// Не запуская код, определите, что выведется в консоль:

// let test = -1;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Ответ: +++

// глава 123

let test1_123a = true;
let test2_123b = true;
let test3_123с = true;

if (test1_123a && test2_123b) {
  console.log('+++');
} else {
  console.log('---');
}

if (test1_123a && !test2_123b) {
  console.log('+++');
} else {
  console.log('---');
}

if (!test1_123a && !test2_123b) {
	console.log('+++');
  } else {
	console.log('---');
  }

if (test1_123a && test2_123b) {
	console.log('+++');
} else {
	console.log('---');
}

if (test1_123a && test2_123b && test3_123с) {
	console.log('+++');
  } else {
	console.log('---');
  }

if (test1_123a && !test2_123b && !test3_123с) {
	console.log('+++');
} else {
	console.log('---');
}

// глава 124
let test124 = 10;

if (test124 == 10) {
	console.log('+++');
}
// глава 125
let test125 = 12;
if (test125 > 0) console.log('+++'); else console.log('---');

if (test125 > 0) console.log('+++');
// глава 127
let day127_1 = 15;

if (day127_1 >= 1 && day127_1 <= 10) {
  console.log('Первая декада месяца');
} else if (day127_1 >= 11 && day127_1 <= 20) {
  console.log('Вторая декада месяца');
} else if (day127_1 >= 21 && day127_1 <= 31) {
  console.log('Третья декада месяца');
} else {
  console.log('Неверное значение переменной day');
}

let day127_2 = 32; 

if (typeof day127_2 !== 'number' || day127_2 < 1 || day127_2 > 31) {
  console.log('Ошибка: значение переменной day должно быть числом от 1 до 31');
} else if (day127_2 >= 1 && day127_2 <= 10) {
  console.log('Первая декада месяца');
} else if (day127_2 >= 11 && day127_2 <= 20) {
  console.log('Вторая декада месяца');
} else {
  console.log('Третья декада месяца');
}
// глава 128
let num128 = 34; 

if (num128 >= 10 && num128 <= 99) {
  let tens128 = (num128 / 10) % 10; // Десятки
  let units128 = num128 % 10; // Единицы
  let sum128 = tens128 + units128;
  if (sum128 <= 9) {
    console.log('Сумма цифр однозначна');
  } else {
    console.log('Сумма цифр двухзначна');
  }
} else {
  console.log('Число не находится в диапазоне от 10 до 99');
}
// глава 129
let lang129 = 'ru';

switch (lang129) {
	case 'ru': 	
	console.log('рус');
	break;
	case 'en': 
	console.log('анг');
	break;
	case 'de': 
	console.log('нем');
	break;
    default:
	console.log('язык не поддерживается');
	break;
}
// глава 131
let num131 = 1;
let res131 = num131 >= 0 ? true : false;

console.log(res131);
// глава 132

// №1⊗jsPmCdLOp

// Пусть даны следующие переменные:

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// Используя оператор ==, узнайте, равны ли значения этих переменных или нет.

let a132_1 = 2 * (3 - 1);
let b132_1 = 6 - 2;
let res132_1 = a132_1 == b132_1;
console.log(res132_1);


// №2⊗jsPmCdLOp

// Пусть даны следующие переменные:

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// Используя оператор >, узнайте, больше ли переменная a, чем b.

let a132_2 = 5 * (7 - 4);
let b132_2 = 1 + 2 + 7;
let res132_2 = a132_2 > b132_2;
console.log(res132_2);

// №3⊗jsPmCdLOp

// Пусть даны следующие переменные:

// let a = 2 ** 4;
// let b = 4 ** 2;
// Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.

let a132_3 = 2 ** 4;
let b132_3 = 4 ** 2;
let res132_3 = a132_3 !== b132_3;
console.log(res132_3);

// глава 133
let ok133 = confirm('Вам есть 18 лет?');
if (ok133){
	alert('Ну тогда вот ваш текст для взрослых')
}
else{
	alert('Код не копируй,хорошо?-_-')
}