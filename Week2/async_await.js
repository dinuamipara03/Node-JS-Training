const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);


async function runProcess() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json)
  }
  
  runProcess();
  