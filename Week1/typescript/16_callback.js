/*
function delayMessage(message: string, delay: number, callback: (msg: string) => void) {
    setTimeout(() => {
        console.log(message);
        callback(message);
    }, delay);
}

function finalCallback(message: string) {
    console.log("Callback completed for message: " + message);
}

const message: string = "Hello, World!";
delayMessage(message, 2000, finalCallback);


type MathOperationCallback = (a: number, b: number, description?: string) => number;

// Function to perform math operation
function performMathOperation(
    operation: MathOperationCallback,
    a: number,
    b: number,
    description?: string
) {
    const result = operation(a, b, description);
    console.log(`Operation: ${description || "Unnamed"}`);
    console.log(`Result: ${result}`);
}

// Custom addition function
const customAddition: MathOperationCallback = (x, y, description) => {
    const sum = x + y;
    return sum;
};

// Perform operations
performMathOperation(customAddition, 5, 3); // No description
performMathOperation(customAddition, 10, 7, "Adding Numbers"); // With description

*/
var myConsoleLog = function (output) {
    if (output === void 0) { output = 'Nothing was passed back to output'; }
    console.log(output);
};
// create a function and pass in the callback method.
function add(cb, a, b) {
    var c = a + b;
    console.log('a + b = ' + c);
}
// call the new add function and pass in the callback function and two numbers.
add(myConsoleLog, 2, 3);
