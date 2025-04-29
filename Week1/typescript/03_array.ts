const names: string[] = [];

names.push("Dylan"); // no error

names.push("Ram"); 
console.log(names);

/*
//++++++++++++Readonly++++++++++
const names: readonly string[] = ["Dylan"];

names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// try removing the readonly modifier and see if it works?
console.log(names);

//+++++++++++Type Inference+++++++++
const numbers = [1, 2, 3]; // inferred to type number[]

numbers.push(4); // no error

// comment line below out to see the successful assignment 
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(numbers);

let head: number = numbers[0]; // no error

console.log(head);
*/