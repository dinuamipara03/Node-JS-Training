//High-order functions can be understood as passthrough function that enhances the functions passed as arguments with extra context and logic.
var filterEven = function (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0)
            result.push(array[i]);
    }
    return result;
};
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//currying
function add(a) {
    return function (b) {
        return a + b;
    };
}
var add5 = add(5);
var resultCurried = add5(3); // resultCurried is 8
console.log(resultCurried);
// Curried function using arrow functions
var multiply = function (a) { return function (b) { return a * b; }; };
var multiplyBy2 = multiply(2);
var resultMultiply = multiplyBy2(10); // resultMultiply is 20
console.log(resultMultiply);
