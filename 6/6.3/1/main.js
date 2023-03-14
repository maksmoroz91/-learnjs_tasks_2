'use strict';

function sum(a) {
    return (b) => a + b;
}

console.log(sum(5)(-1));