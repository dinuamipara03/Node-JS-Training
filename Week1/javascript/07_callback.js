/*

//ex 1
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayGoodbye);




//ex 2
  function fetchData(callback) {
    setTimeout(() => {
      const data = { id: 1, name: "Alice" };
      callback(data);
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  fetchData((data) => {
    console.log("Data received:", data);
  });

  */

  //ex 3
  // Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);
//In the above program, the code is executed synchronously. The sayName() function is passed as an argument to the greet() function. The setTimeout() method executes the greet() function only after 2 seconds. However, the sayName() function waits for the execution of the greet() function.