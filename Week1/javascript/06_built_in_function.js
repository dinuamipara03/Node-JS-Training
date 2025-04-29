/*
//eval - Evaluates a string and returns a value.

var x = 2
var y = 39
var z = "42"
console.log(eval("x + y + 5")) 
console.log(eval(x + y + 5)) 
console.log(eval(z))

//parseInt

// console.log(parseInt("10"))
// console.log(parseInt("10.00"))
// console.log(parseInt("10.33"))
// console.log(parseInt("34 45 66"))
// console.log(parseInt("   60   "))
// console.log(parseInt("40 years"))
// console.log(parseInt("He was 40"))
console.log(parseInt("0x11", 16))

//parseFloat

// console.log(parseFloat(10))
// console.log(parseFloat("10"))
// console.log(parseFloat("10.33"))
// console.log(parseFloat("34 45 66"))
// console.log(parseFloat("He was 40"))

//map
const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10)
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]

//filter
const arr2 = [1, 2, 3, 4, 5];
const output2 = arr.filter((num) => num % 2) // filter out odd numbers
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(output2); // [1, 3, 5]

//reduce
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)

console.log(sum); // 15

*/
//currying

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6