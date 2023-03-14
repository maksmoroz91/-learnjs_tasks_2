'use strict';

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListFor(list) {
    let temp = list;
    let arrValue = [];

    while (temp) {
        arrValue.push(temp.value);
        temp = temp.next;
    }
    
    for (let i = arrValue.length - 1; i >= 0; i--) {
        console.log(arrValue[i]);
    }
}

function printList(list) {
    if (list.next) {
        printList(list.next);
    }
    
    console.log(list.value);
}

printListFor(list);
printList(list);
