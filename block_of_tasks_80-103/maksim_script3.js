"use strict"
// глава 80
let obj80 = {1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'};
console.log(obj80);
// глава 81
let obj81 = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
console.log(obj81);
// глава 82
let user82 = {name: 'Максим', surname: 'Киселев', patronymic: 'БимБим'};
console.log(user82['name'], user82['surname'], user82['patronymic']);
// глава 83
let date83 = {year: '2024', month: '10', day: '13'};
console.log([date83.year, date83.month, date83.day].join('-'));
// использовал метод join,чтобы был красивый вывд даты
