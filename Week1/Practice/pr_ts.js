// Write a TypeScript program to declare and initialize a variable of type 'string', 'number', and'boolean'.
var brand = "Tata", num = 21, isValid = true;
console.log(brand, num, isValid);
console.log(typeof brand);
console.log(typeof num);
console.log(typeof isValid);
// Create a function that takes two numbers as parameters and returns their sum.
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
// Write a function that checks whether a given number is even or odd.
function oddEven(a) {
    if (a % 2 == 0) {
        console.log(a, "is Even number");
    }
    else {
        console.log(a, "is Odd number");
    }
}
oddEven(9);
oddEven(4);
// Define a tuple '[number, string]', assign values, and print them.
var tuple = [23, "ram"];
console.log(tuple);
// Write a function that takes an array of numbers and returns the maximum value.
function max(arr) {
    return Math.max.apply(Math, arr);
}
var y = max([1, 2, 3, 4]);
console.log(y);
// Implement a function that reverses a string.
function reverse(str) {
    return str.split("").reverse().join("");
}
var str1 = reverse("Hello");
console.log(str1);
// Write a function to merge two arrays and remove duplicates.
function mergeRemove(arr, arr1) {
    arr = arr.concat(arr1);
    return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
}
var x = [1, 2, 4, 3, 5], x1 = [5, 3, 6, 7, 6];
console.log(mergeRemove(x, x1).sort().toString());
// Implement a function to find the sum of all elements in an array.
var nums = [1, 2, 3, 4, 5];
var result = nums.reduceRight(function addArray(a, b) {
    return a + b;
});
console.log(result);
var Person = {
    name: "Dinaxi",
    age: 21
};
console.log(Person.name, "is", Person.age, "years old.");
var obj1 = { id: 1 };
var obj2 = { id: 2, name: "Example" };
function processObject(obj) {
    console.log("ID: ".concat(obj.id));
    if (obj.name !== undefined) {
        console.log("Name: ".concat(obj.name));
    }
    if (obj.description !== undefined) {
        console.log("Description: ".concat(obj.description));
    }
}
processObject(obj1);
processObject(obj2);
// Using the 'in' operator
function processObject2(obj) {
    console.log("ID: ".concat(obj.id));
    if ('name' in obj) {
        console.log("Name: ".concat(obj.name));
    }
    if ('description' in obj) {
        console.log("Description: ".concat(obj.description));
    }
}
processObject2(obj1);
processObject2(obj2);
// Define a class 'Student' with properties 'name', 'rollNumber', and a method 'display()' to print details.
var Student = /** @class */ (function () {
    function Student(name, rollNumber) {
        this.name = name, this.rollNumber = rollNumber;
    }
    Student.prototype.display = function () {
        return "Student name is " + this.name + " and rollno is " + this.rollNumber;
    };
    return Student;
}());
var student = new Student("John", 23);
console.log(student.display());
// Implement a class 'Car' with a constructor that takes 'brand' and 'year' and a method'getCarInfo()'.
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        return "Brand is " + this.brand + " and year is " + this.year;
    };
    return Car;
}());
var car = new Car("Kia", 2022);
console.log(car.getCarInfo());
// Create a class 'Rectangle' with methods to calculate area and perimeter.
var Rectangle1 = /** @class */ (function () {
    function Rectangle1(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle1.prototype.area = function () {
        return "Area: " + this.width * this.height;
    };
    Rectangle1.prototype.perimeter = function () {
        return "Perimeter: " + 2 * (this.width + this.height);
    };
    return Rectangle1;
}());
var rectangle = new Rectangle1(23, 24);
console.log(rectangle.area(), rectangle.perimeter());
// Define an enum 'UserRole' with values 'Admin', 'User', and 'Guest'.
var userRole;
(function (userRole) {
    userRole[userRole["Admin"] = 0] = "Admin";
    userRole[userRole["User"] = 1] = "User";
    userRole[userRole["Guest"] = 2] = "Guest";
})(userRole || (userRole = {}));
// Write a function to check if a given string is a palindrome.
function isPalindrom(str) {
    var str2 = str.split("").reverse().join("");
    return str == str2 ? "Palindrom" : "Not palindrom";
}
console.log(isPalindrom("nayan"));
