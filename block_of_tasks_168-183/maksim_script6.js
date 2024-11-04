"use strict"  
// глава 168
let arr168_1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr168_1[3][2], arr168_1[1][1], arr168_1[2][0], arr168_1[0][0]);

// глава 168
let arr168_2 = [[1, 2], [3, 4], [5, 6]];
console.log(arr168_2[0][0] + arr168_2[0][1] + arr168_2[1][0] + arr168_2[1][1] + arr168_2[2][0] + arr168_2[2][1]);

// глава 169
let arr169 = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
console.log(arr169[0][0][0]+arr169[0][1][0]+arr169[0][0][1]+arr169[0][1][1]+arr169[1][0][0]+arr169[1][0][1]+arr169[1][1][0]+arr169[1][1][1]);

// глава 170
let arr170 = [
    [
        1, 2, 3, [4, 5, [6, 7]]
    ], 
    [
        8, [9, 10]
    ]
];
console.log('55');

// глава 171

let arr171_1 = [[1, 2, 3], [4, 5], [6]];
let sum171_1 = 0;

for (let subArr171_1 of arr171_1) {
  for (let elem of subArr171_1) {
    sum171_1 += elem;
  }
}

console.log("Сумма элементов:", sum171_1);

let arr171_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum171_2 = 0;

for (let subArr1_171_2 of arr171_2) {
  for (let subArr2_171_2 of subArr1_171_2) {
    for (let elem of subArr2_171_2) {
      sum171_2 += elem; 
    }
  }
}
console.log("Сумма элементов:", sum171_2);

// глава 172

let arr172_1 = [[1, 2, 3], [4, 5], [6]];
let sum172_1 = 0;

for (let i = 0; i < arr172_1.length; i++) {
  for (let j = 0; j < arr172_1[i].length; j++) {
    sum172_1 += arr172_1[i][j]; 
  }
}

console.log("Сумма элементов двухмерного массива:", sum172_1);


let arr172_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum172_2 = 0;
for (let i = 0; i < arr172_2.length; i++) {
  for (let j = 0; j < arr172_2[i].length; j++) {
    for (let k = 0; k < arr172_2[i][j].length; k++) {
      sum172_2 += arr172_2[i][j][k]; 
    }
  }
}

console.log("Сумма элементов трехмерного массива:", sum172_2);

// глава 173
let arr173_1 = [];

for (let i = 0; i < 3; i++) {
  arr173_1[i] = []; 
  
  for (let j = 0; j < 5; j++) {
    arr173_1[i].push(j + 1); 
  }
}

console.log(arr173_1);


let arr173_2 = [];

for (let i = 0; i < 3; i++) {
  arr173_2[i] = [];
  
  for (let j = 0; j < 4; j++) {
    arr173_2[i].push('x'); 
  }
}

console.log(arr173_2);


let arr173_3 = [];

for (let i = 0; i < 3; i++) {
  arr173_3[i] = [];
  for (let j = 0; j < 2; j++) {
    arr173_3[i][j] = []; 
    for (let k = 0; k < 5; k++) {
      arr173_3[i][j].push(k + 1); 
    }
  }
}
console.log(arr173_3);

// глава 174

// №1⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_1 = [];

for (let i = 0; i < 3; i++) {
  arr174_1[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_1[i].push(j);
  }
}

console.log(arr174_1);


// №2⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = '';
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_2 = [];

for (let i = 0; i < 3; i++) {
  arr174_2[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_2[i].push(j);
  }
}

console.log(arr174_2);

// №3⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_3 = [];

for (let i = 0; i < 3; i++) {
  arr174_3[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_3[i].push(j);
  }
}

console.log(arr174_3);

// №4⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[j] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_4 = [];

for (let i = 0; i < 3; i++) {
  arr174_4[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_4[i].push(j);
  }
}

console.log(arr174_4);

// №5⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_5 = [];

for (let i = 0; i < 3; i++) {
  arr174_5[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_5[i].push(j);
  }
}

console.log(arr174_5);

// №6⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr.push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_6 = [];

for (let i = 0; i < 3; i++) {
  arr174_6[i] = []; // Инициализируем подмассив
  for (let j = 1; j <= 5; j++) {
    arr174_6[i].push(j); // Добавляем в подмассив
  }
}

console.log(arr174_6);

// глава 175

// №1⊗jsPmMuAFO

// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[1, 2], [3, 4], [5, 6], [7, 8]]

let arr175_1 = [];
for (let i = 0; i < 4; i++) {
  arr175_1[i] = [];
  for (let j = 0; j < 2; j++) {
    arr175_1[i][j] = i * 2 + j + 1;
  }
}
console.log(arr175_1);

// №2⊗jsPmMuAFO

// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

let arr175_2 = [];
for (let i = 0; i < 4; i++) {
  arr175_2[i] = [];
  for (let j = 0; j < 3; j++) {
    arr175_2[i][j] = (i * 3 + j + 1) * 2;
  }
}
console.log(arr175_2);

// №3⊗jsPmMuAFO

// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let arr175_3 = [];
for (let i = 0; i < 2; i++) {
  arr175_3[i] = [];
  for (let j = 0; j < 2; j++) {
    arr175_3[i][j] = [];
    for (let k = 0; k < 2; k++) {
      arr175_3[i][j][k] = i * 4 + j * 2 + k + 1;
    }
  }
}
console.log(arr175_3);

// №4⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_4 = [];
let k175_4 = 1;

for (let i = 0; i < 3; i++) {
  arr175_4[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_4[i][j] = k175_4;
    k175_4++;
  }
}

console.log(arr175_4);

// №5⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

//  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_5 = [];
let k175_5 = 1;

for (let i = 0; i < 3; i++) {
    arr175_5[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr175_5[i][j] = k175_5;
        k175_5++; // Увеличиваем k после присвоения значения
    }
}

console.log(arr175_5);



// №6⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k--;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_6 = [];
let k175_6 = 1;

for (let i = 0; i < 3; i++) {
  arr175_6[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_6[i][j] = k175_6;
    k175_6++;
  }
}

console.log(arr175_6);


// №7⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];
// let k;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_7 = [];
let k175_7 = 1;

for (let i = 0; i < 3; i++) {
  arr175_7[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_7[i][j] = k175_7;
    k++;
  }
}

console.log(arr175_7);


// №8⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_8 = [];
let k175_8 = 1;

for (let i = 0; i < 3; i++) {
  arr175_8[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_8[i][j] = k175_8;
    k175_8++; 
  }
}

console.log(arr175_8);


// №9⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0, k++; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_9 = [];
let k175_9 = 1;

for (let i = 0; i < 3; i++) {
  arr175_9[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++; // Убедитесь, что k увеличивается на каждой итерации
  }
}

console.log(arr);


// №10⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++; k++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_10 = [];
let k175_10 = 1;

for (let i = 0; i < 3; i++) {
    arr175_10[i] = [];
    
    for (let j = 0; j < 3; j++, k175_10++) { // Убедитесь в правильной инкрементации k
        arr175_10[i][j] = k175_10;
    }
}

console.log(arr175_10);

// №11⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = ++k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_11 = [];
let k175_11 = -1;

for (let i = 0; i < 3; i++) {
    arr175_11[i] = [];
    
    for (let j =0; j <3; j++) {
        arr175_11[i][j] = ++k175_11 +1;
    }
}

console.log(arr175_11);

// №12⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[k] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


let arr175_12 = [];
let k175_12 =1;

for (let i=0;i<3;i++){
    arr175_12[i]=[];
    
    for(let j=0;j<3;j++){
        arr175_12[i][j]=k175_12;
        k175_12++;
    }
}

console.log(arr175_12);


// №13⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; k++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_13 = [];

for (let i=0,k=1;i<3;i++){
    arr175_13[i]=[];
    
    for(let j=0;j<3;j++,k++){
        arr175_13[i][j]=k;
    }
}

console.log(arr175_13);