//++++++++++++++++++++++++++++++++++++++++++++++arrow function+++++++++++++++++++++++++++++++++++++++++++++++
/*
//+++++Arrow Function without Parameters+++++
//ex1
const add = (a, b) => a + b;
console.log(add(5, 3));

//ex2
const creole = () => {
    console.log( "Hi from creole!" );
}

creole();

//+++++ Arrow Function with Single Parameters+++++
//ex1
const square = x => x*x;
console.log(square(4));


//+++++Arrow Function with Multiple Parameters+++++
const sum = ( x, y, z ) => {
    console.log( x + y + z )
}

sum( 10, 20, 30 );

//++++++Return Object+++++
const makePerson = (firstName, lastName) =>
    ({first: firstName, last: lastName});
    console.log(makePerson("Pankaj", "Bind"));
*/

//++++++++++++++++++++++++++++++++++++Immediately Invoked Function Expression (IIFE)++++++++++++++++++++++++++++++++++
//executed immediately after their definition
(function () {
    console.log("This runs immediately!");
})();


//+++++++++++++++++++++++++++++++++++++++++++Anonymous Functions++++++++++++++++++++++++++++++++++++++++++++++++++
setTimeout(function () {
    console.log("Anonymous function executed!");
}, 1000);

//++++++++++++++++++++++++++++++++++++++++++++++++Nested Functions++++++++++++++++++++++++++++++++++++++++++++++++
function outerFun(a) {
    function innerFun(b) {
        return a + b;
        
    }
    console.log(a)
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++Pure Functions+++++++++++++++++++++++++++++++++++++++++++++
function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3));