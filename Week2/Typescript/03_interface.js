var newUser = {
    username: "john_doe",
    email: "john@example.com"
};
console.log("User: ".concat(newUser.username, ", Email: ").concat(newUser.email));
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, " says: Woof!"));
    };
    return Dog;
}());
var myDog = new Dog("Buddy");
myDog.sound();
