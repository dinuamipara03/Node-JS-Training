/*

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(myCar.make); // "Honda"
  myFunc(myCar);
  console.log(myCar.make); // "Toyota"
  

  //function scope
function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    square(3);
    return square(a) + square(b);
  }
;
console.log(addSquares(3,4));



// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;
  const name = "Chamakh";

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
  */


function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside() ); // 20 (instead of 10)
   // 5
