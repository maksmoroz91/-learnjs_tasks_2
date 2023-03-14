'use strict';

function throttle(func, ms) {
    let isThrottled = false;
    let lastArgs;
    let lastThis;

    function wrap() {
        if (isThrottled) {
            lastArgs = arguments;
            lastThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;

            if (lastArgs) {
                wrap.apply(lastThis, lastArgs);
                lastArgs = null;
                lastThis = null;
            }
        }, ms);
    }
    return wrap;
}

function f(a) {
    console.log(a)
}

let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)