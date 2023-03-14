'use strict';

function sum(firstValue) {
    let currentSum = firstValue;

    function func(nextValue) {
        currentSum += nextValue;
        return func;
    }

    func.toString = function () {
        return currentSum;
    };
    return func;
}

console.log(JSON.parse(sum(1)(6)(-5)));