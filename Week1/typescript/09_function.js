//return type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//void
function printHello() {
    console.log('Hello!');
}
printHello();
//parameter
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
//Optional Parameters
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 5));
//Default Parameters
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(10));
//named parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
//Rest Parameters
function adding(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(adding(10, 10, 10, 10, 10));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(10));
