'use strict';

function sumTo1(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumTo2(n) {
    return (n == 1) ? n : n + sumTo2(n - 1);
}

function sumTo3(n) {
    return (n / 2) * (n + 1);
}

console.log(sumTo1(100));
console.log(sumTo2(100));
console.log(sumTo3(100));
