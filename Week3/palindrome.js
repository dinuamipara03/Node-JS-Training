"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function palindrome(str) {
    var res = str.replace(/[\s.,]/g, '').trim();
    var reversed = res.split('').reverse().join('');
    return res === reversed ? "Palindrome: " + res : "Not Palindrome: " + res;
}
console.log(palindrome("bar, rab"));
console.log(palindrome("hello"));
//from usser
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a string: ', function (input) {
    console.log(palindrome1(input));
    rl.close();
});
function palindrome1(input) {
    var res = input.replace(/[\s.,_]/g, '').trim();
    var reversed = res.split('').reverse().join('');
    return res === reversed ? "Palindrome: " + res : "Not Palindrome: " + res;
}
