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

// глава 187

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

let randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomArray);

// глава 188

let a = -4, b = -65;
console.log(Math.abs(b-a));

// глава 189
let str189_1 = 'js';
console.log(str189_1.toUpperCase());

let str189_2 = 'JS';
console.log(str189_2.toLowerCase());

// глава 190

let str190_1 = 'я учу javascript!';
let word1_1 = str190_1.substr(2, 3); 
let word2_1 = str190_1.substr(6, 10);
console.log(word1_1); 
console.log(word2_1); 

let str190_2 = 'я учу javascript!';
let word1_2 = str190_2.substring(2, 5); 
let word2_2 = str190_2.substring(6, 16); 
console.log(word1_2); 
console.log(word2_2);  

let str190_3 = 'я учу javascript!';
let word1_3 = str190_3.slice(2, 5); 
let word2_3 = str190_3.slice(6, 16); 
console.log(word1_3); 
console.log(word2_3);

// глава 191

const url = "http://example.com";
if (url.startsWith("http://")) {
    console.log("Строка начинается с 'http://'");
} else {
    console.log("Строка не начинается с 'http://'");
}

const fileName = "index.html";
if (fileName.endsWith(".html")) {
    console.log("Строка заканчивается на '.html'");
} else {
    console.log("Строка не заканчивается на '.html'");
}