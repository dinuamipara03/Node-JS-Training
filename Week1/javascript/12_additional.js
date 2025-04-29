let a = 3, b = 4;
let ans = a??b; // means (a !== null && a !== undefined) ? a : b;
console.log(ans)

//fun.call
function sayHi() {
    console.log(this.name);
  }
  
  let user = { name: "John" };
  let admin = { name: "Admin" };
  
  // use call to pass different objects as "this"
  sayHi.call( user ); // John
  sayHi.call( admin ); // Admin

//new function
let sum = new Function('a', 'b', 'return a + b');
console.log( sum(1, 2) ); // 3

//function binding
let user2 = {
    firstName: "John"
  };
  
  function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
  }
  
  // bind this to user2
  let funcUser = func.bind(user2);
  
  funcUser("Hello"); 