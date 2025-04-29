// Generics - Types which take parameters
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name");
// Typeof Type Operator - Using the typeof operator to create new types
console.log(typeof "Hello world");
// Create Book instance
var book = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
};
// Access title property
var title = book["title"];
console.log(title);
var move;
move = "Up";
console.log(move);
//union
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
console.log(printStatusCode(404));
console.log(printStatusCode('404'));
// Create an object of the intersection type
var hybridPet = {
    name: "Griffin",
    breed: "Labrador",
    wingspan: 1.2,
    bark: function () { return console.log("Woof!"); },
    fly: function () { return console.log("Flap, flap!"); },
};
// Access properties and methods
console.log(hybridPet.name);
console.log(hybridPet.wingspan);
hybridPet.bark();
hybridPet.fly();
function drawShape(shape, position) {
    console.log("Drawing a ".concat(shape, " at (").concat(position.x, ", ").concat(position.y, ")"));
}
drawShape("circle", { x: 10, y: 20 });
//Assertion
var value = "This is a string";
var lengthOfString = value.length;
console.log(lengthOfString);
