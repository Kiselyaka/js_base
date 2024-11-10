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