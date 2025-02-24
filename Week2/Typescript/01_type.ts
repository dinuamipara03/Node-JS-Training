// Generics - Types which take parameters
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42));

// Keyof Type Operator - Using the keyof operator to create new types
interface Person {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  let person = {
    name: "Max",
    age: 27
  };
  printPersonProperty(person, "name");

// Typeof Type Operator - Using the typeof operator to create new types
console.log(typeof "Hello world");

// Indexed Access Types - Using Type['a'] syntax to access a subset of a type
type Book = {
    title: string;
    author: string;
    year: number;
};

// Get type of title property
type PropertyType = Book["title"];

// Create Book instance
const book: Book = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
};

// Access title property
const title: PropertyType = book["title"];

console.log(title);

// Conditional Types - Types which act like if statements in the type system
interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  } 
  type Example1 = Dog extends Animal ? number : string;
  type Example2 = RegExp extends Animal ? number : string;

// Mapped Types - Creating types by mapping each property in an existing type
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  type PartialUser = {
    [P in keyof User]?: User[P];
  };

// Template Literal Types - Mapped types which change properties via template literal strings
type Direction = "Up" | "Down" | "Left" | "Right";

let move: Direction;

move = "Up"; 