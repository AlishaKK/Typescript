"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sum = function (x, y) {
    return x + y;
};
console.log(sum(2, 3));
function sum1(x, y) {
    return x + y;
}
sum1(2, 4);
function createBox(height, width, depth = 1) {
    return { height, width, depth };
}
console.log(createBox(4, 4, 6));
