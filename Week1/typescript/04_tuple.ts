//ex1
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);

//ex2
// define our tuple
let ourTuple1: [number, boolean, string];

// initialize correctly
ourTuple1 = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple1.push('Something new and wrong');

console.log(ourTuple1);

/*
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');

// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');
*/