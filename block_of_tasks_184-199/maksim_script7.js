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
// глава 185

let num1_185 = 379;
let sqrt1_185 = Math.sqrt(num1_185);

let rounded1 = Math.round(sqrt1_185);
let roundedToTenths1 = sqrt1_185.toFixed(1);
let roundedToHundredths1 = sqrt1_185.toFixed(2);

console.log(rounded1); // Округлено до целых
console.log(roundedToTenths1); // Округлено до десятых
console.log(roundedToHundredths1); // Округлено до сотых

let num2_185 = 587;
let sqrt2_185 = Math.sqrt(num2_185);

let roundedFloor2 = Math.floor(sqrt2_185);
let roundedCeil2 = Math.ceil(sqrt2_185);

let result2 = {
    floor: roundedFloor2,
    ceil: roundedCeil2
};

console.log(result2);

// глава 186

let obj186 = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max(...obj186));
console.log(Math.min(...obj186));

