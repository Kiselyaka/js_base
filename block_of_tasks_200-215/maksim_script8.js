"use strict"
// глава 200

function func() {
	console.log('Киселев Максим');
}
func();

function sum_of_1_100() {
    let sum = 0;
    for (let index = 1; index <= 100; index++) {
        sum += index;
    }
    console.log(sum);
}
sum_of_1_100();

// глава 201

function func_3_201(num_201) {
	console.log(Math.pow(num_201, 3));
}
func_3_201(3);

function plus_or_minus(number_pm) {
    if (number_pm > 0){
        console.log("+++");
    }
    else{
        console.log("---");
    }
}
plus_or_minus(-23);