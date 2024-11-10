"use strict"
// глава 184

console.log(Math.pow(2, 10));

console.log(Math.sqrt(245));

let arr184 = [4, 2, 5, 19, 13, 0, 10];
let sumOfCubes = 0;

for (let i = 0; i < arr184.length; i++) {
    sumOfCubes += Math.pow(arr184[i], 3);
}

let result184 = Math.sqrt(sumOfCubes);
console.log(result184);
// 