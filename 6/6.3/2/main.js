'use strict';

function inBetween(min, max) {
    return (value) => value >= min && value <= max;
}

function inArray(arr) {
    return (value) => arr.includes(value);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));
