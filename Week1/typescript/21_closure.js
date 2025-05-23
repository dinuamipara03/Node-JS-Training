// ex1
function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function () {
        console.log(variableInOuterFunction);
    };
}
var innerFunction = outerFunction("hello closure!");
// Note the outerFunction has returned
innerFunction(); // logs hello closure!
// ex2
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
