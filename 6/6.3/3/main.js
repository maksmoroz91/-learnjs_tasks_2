'use strict';

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key) {
    return (a, b) => a[key] > b[key] ? 1 : -1;
}

console.log(users.sort(byField('surname')));