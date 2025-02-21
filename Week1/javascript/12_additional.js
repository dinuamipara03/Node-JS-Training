let a = 3, b = 4;
let ans = a??b; // means (a !== null && a !== undefined) ? a : b;
console.log(ans)

//fun.call
function sayHi() {
    alert(this.name);
  }
  
  let user = { name: "John" };
  let admin = { name: "Admin" };
  
  // use call to pass different objects as "this"
  sayHi.call( user ); // John
  sayHi.call( admin ); // Admin