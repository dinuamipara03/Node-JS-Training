var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// +++++++++++++++++TypeScript Arithmetic operators++++++++++++++++++
var a = 50, b = 40;
// Addition
console.log(a + b);
// Subtraction
console.log(a - b);
// Multiplication
console.log(a * b);
// Division 
console.log(a / b);
// Modulus 
console.log(a % b);
// Increment 
console.log(a++);
// Decrement 
console.log(b--);
//+++++++++++++++++ TypeScript Logical operators+++++++++++++++++
var x = 2, y = 3;
// Logical AND (&&)
console.log(x && y);
// Logical OR (||)
console.log(x || y);
// Logical NOT (!)
console.log(!x);
console.log(!y);
//+++++++++++++++++ TypeScript Relational operators+++++++++++++++++
var c = 2, d = 3, e = '3';
// Equal to (==)
console.log(x == c);
// Not equal to (!=)
console.log(c != d);
// Strictly equal to (===)
console.log(x === c);
//console.log(d===e)//error
// Strictly not equal to (!==)
console.log(c !== d);
// Greater than (>)
console.log(c > d);
// Less than (<)
console.log(c < d);
// Greater than or equal to (>=)
console.log(c >= d);
// Less than or equal to (<=)
console.log(c <= d);
//+++++++++++++++++ TypeScript Bitwise operators+++++++++++++++++
// Bitwise AND (&)
console.log(x & y);
// Bitwise OR (|)
console.log(x | y);
// Bitwise XOR (^)
console.log(x ^ y);
// Bitwise NOT (~)
console.log(~x);
// Left Shift (<<)
console.log(x << y);
// Sign-propagating Right Shift (>>)
console.log(x >> y);
// Zero-fill Right Shift (>>>)
console.log(x >>> y);
//+++++++++++++++++ TypeScript Assignment operators+++++++++++++++++
// Assignment (=)
var f = 5;
// Addition Assignment (+=)
f += 2;
console.log(f);
// Subtraction Assignment (-=)
f -= 2;
console.log(f);
// Multiplication Assignment (*=)
f *= 2;
console.log(f);
// Division Assignment (/=)
f /= 2;
console.log(f);
// Modulus Assignment (%=)	
f %= 2;
console.log(f);
//+++++++++++++++++ TypeScript Ternary/conditional operators+++++++++++++++++
(x > y) ? "X is grater then Y" : "Y is grater then X";
//+++++++++++++++++ TypeScript Type Operators+++++++++++++++++
// typeof
console.log(typeof x);
console.log(typeof e);
//+++++++++++++++++ TypeScript Spread operator+++++++++++++++++
var parts = ['shoulders', 'knees'];
var lyrics = __spreadArray(__spreadArray(['head'], parts, true), ['and', 'toes'], false);
console.log(lyrics);
