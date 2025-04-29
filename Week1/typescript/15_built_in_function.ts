//High-order functions can be understood as passthrough function that enhances the functions passed as arguments with extra context and logic.

const filterEven = (array: number[]) => {
    const result: number[] = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) result.push(array[i]);
    }
  
    return result;
  }
  
  console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


  //currying
    function add(a: number): (b: number) => number {
        return function(b: number): number {
        return a + b;
        };
    }
    
    const add5 = add(5);
    const resultCurried = add5(3); // resultCurried is 8
    console.log(resultCurried)
    
    // Curried function using arrow functions
    const multiply = (a: number) => (b: number) => a * b;
    
    const multiplyBy2 = multiply(2);
    const resultMultiply = multiplyBy2(10); // resultMultiply is 20
    console.log(resultMultiply)