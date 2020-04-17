"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fiboNaive(index) {
    if (index === 0) {
        return 0;
    }
    else if (index === 1) {
        return 1;
    }
    else {
        return fiboNaive(index - 1) + fiboNaive(index - 2);
    }
}
exports.fiboNaive = fiboNaive;
function fibo(index) {
    if (index === 0) {
        return 0;
    }
    else {
        var last = 1;
        var seclast = 0;
        var aux = void 0;
        for (var _i = 1; _i < index; _i++) {
            aux = last;
            last = seclast + last;
            seclast = aux;
        }
        return last;
    }
}
exports.fibo = fibo;
//# sourceMappingURL=fib.js.map