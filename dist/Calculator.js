"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
function add(num1, num2) {
    console.log(num1 + num2);
}
exports.add = add;
function subtract(num1, num2) {
    console.log(num1 - num2);
}
exports.subtract = subtract;
function multiply(num1, num2) {
    console.log(num1 + num2);
}
exports.multiply = multiply;
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("invalid operation (divide by 0)");
    }
    console.log(num1 + num2);
}
exports.divide = divide;
