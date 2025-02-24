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
