'use strict';

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);

        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

function printNumbersR(from, to) {
    let current = from;

    setTimeout(function func() {
        console.log(current);
        if (current < to) {
            setTimeout(func, 1000);
        }
        current++;
    }, 1000);
}

printNumbers(3, 7);
printNumbersR(3, 7);