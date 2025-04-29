var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        return "Hello, ".concat(name, "!");
    };
    return Greeter;
}());
var person1 = ['Ram', 'Shyam', 'Sita', 'Gita', 'Ram'];
var person2 = ['Radha', 'Rani', 'Jay', 'Deep', 'Salu', 'Nandini', 'Dhruvi'];
var nums = [11, 25.7, 35, 23, 45, 76, 68, 45.2];
var str1 = new String("This is string one and again string");
var str = "Hello...Typescript";
var num1 = 12.30;
// toExponential()
var val = num1.toExponential();
console.log(val);
// toLocaleString()
console.log(num1.toLocaleString());
// toPrecision()
console.log(num1.toPrecision(1));
// toString()
console.log(num1.toString(2));
// valueOf()
console.log(num1.valueOf());
//toFixed()
console.log(num1.toFixed(1));
// charAt()
console.log(str.charAt(1));
// charCodeAt()
console.log(str.charCodeAt(1));
// concat()
console.log(str.concat(str1.toString()));
// indexOf()
console.log(str1.indexOf("one"));
// lastIndexOf()
console.log(str1.lastIndexOf("string"));
// replace()
console.log(str.replace("Hello", "Hellooooo"));
// search()
if (str.search('Ty') == -1) {
    console.log("Does not contain Typescript");
}
else {
    console.log("Contains Typescript");
}
// slice()
var sliced = str.slice(3, -2);
console.log(sliced);
// split()
var splitted = str.split(" ", 3);
console.log(splitted);
// substr()
console.log(str.substr(-2, 2));
// substring()
console.log(str.substring(1, 2));
// toLowerCase()
console.log(str.toLowerCase());
// toString()
console.log(str.toString());
// toUpperCase()
console.log(str.toUpperCase());
// valueOf()
console.log(str.valueOf());
// concat()
console.log(person1.concat(person2));
// filter()
var ans = person1.filter(function (item, index) { return person1.indexOf(item) === index; });
console.log(ans);
// indexOf()
console.log(person1.indexOf('Shyam') != -1);
// join()
console.log(person1.join(" "));
// lastIndexOf()
console.log(person1.lastIndexOf('Ram'));
// map()
nums.map(Math.ceil);
// pop()
person1.pop();
console.log(person1);
// push()
person1.push('Ragini');
console.log(person1);
// reduce()
var res = nums.reduce(function (a, b) { return a + b; });
console.log(res);
// reduceRight()
var result = nums.reduceRight(function (a, b) { return a + b; });
console.log(result);
// reverse()
console.log(person1.reverse());
// shift()
person2.shift();
console.log(person2);
// slice()
console.log(person2.slice(2, 4));
// some()
nums.some(function (i) { return i % 2 == 0; });
// sort()
console.log(nums.sort());
// splice()
person1.splice(4, 0, "Darsh");
console.log(person1);
// toString()
console.log(person1.toString());
// unshift()
person2.unshift('nandini');
console.log(person2);
