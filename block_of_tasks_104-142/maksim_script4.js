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