var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Members: Types
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = "Jane";
console.log(person);
//Members: Visibility
/*
public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("Jane");
console.log(person1.getName()); // person.name isn't accessible from outside the class since it's private
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
var Rectangle1 = /** @class */ (function () {
    function Rectangle1(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle1.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle1;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle1));
var mySq = new Square(20);
console.log(mySq.getArea());
var Rectangle2 = /** @class */ (function () {
    // using protected for these members allows access from classes that extend from this class, such as Square
    function Rectangle2(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle2.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle2.prototype.toString = function () {
        return "Rectangle2[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Rectangle2;
}());
var Square1 = /** @class */ (function (_super) {
    __extends(Square1, _super);
    function Square1(width) {
        return _super.call(this, width, width) || this;
    }
    // this toString replaces the toString from Rectangle
    Square1.prototype.toString = function () {
        return "Square1[width=".concat(this.width, "]");
    };
    return Square1;
}(Rectangle2));
var mySq1 = new Square1(20);
console.log(mySq1.toString());
//abstract class - An abstract class is a class that cannot be instantiated directly. Instead, it serves as a blueprint for other classes. 
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " is moving."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: Woof!"));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: Meow!"));
    };
    return Cat;
}(Animal));
var dog = new Dog('Buddy');
var cat = new Cat('Whiskers');
dog.makeSound();
dog.move();
cat.makeSound();
cat.move();
