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

    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

function printList(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
}

printListFor(list);
printList(list);