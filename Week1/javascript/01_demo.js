/*console.log(eval("3+5")); 

var x = 1;

if (x === 1) {
  var y=3;

  console.log(x);
  // Expected output: 2
}

console.log(y);
// Expected output: 2




function foo() {
    var x = 1;
    function bar() {
      var y = 2;
      console.log(x); // 1 (function `bar` closes over `x`)
      console.log(y); // 2 (`y` is in scope)
    }
    bar();
    console.log(x); // 1 (`x` is in scope)
    console.log(y); // ReferenceError, `y` is scoped to `bar`
  }
  
  foo();
  



bla = 2;
var bla;

/*inplicite understand as 
var bla;
bla=2;*\/

console.log(bla)





function doSomething() {
    var bar;
    console.log(bar); // undefined
    bar = 111;
    console.log(bar); // 111
  }
  
  doSomething();



var a = 1;
function a() {}
console.log(a); // 1



  var a = 1;
function a() {
    var a=3;
    console.log(a);
}
console.log(a); // 1
a(); //Uncaught TypeError: a is not a function


var x = y;
  y = "A";
console.log(x, y); // undefined A


var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
    // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", as y is local to function a


*/
for (let i = 0; i < 10; i++) console.log(i);






