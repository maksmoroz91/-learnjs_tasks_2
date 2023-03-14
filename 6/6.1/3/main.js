'use strict';

function fib(n) {
    let last = 1;
    let penultimate = 1;
    let temp;

    for (let i = 2; i < n; i++) {
        temp = penultimate + last;
        penultimate = last;
        last = temp;
    }
    return last;
}

console.log(fib(77));