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