/*
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.
*/

function f() {
    try {
        console.log(0);
        throw "bogus";
    } catch (e) {
        console.log(1);
        // This return statement is suspended
        // until finally block has completed
        return true;
        console.log(2); // not reachable
    } finally {
        console.log(3);
        return false; // overwrites the previous "return"
        console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false

//try-catch
try {
    let json = '{"name":"Jale", "age":30}';
    let user = JSON.parse(json);

    if (!user.email) {
        throw new SyntaxError("Field 'email' not found in JSON.");
    }
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("SyntaxError Error Caught: " + error.message);
    } else {
        console.log("An unexpected error occurred: " + error.message);
    }
}

//throw
function validateEmail(email) {
    if (!email.includes('@')) {
        throw new Error("Invalid email address: '@' character not found!");
    }
    return "Valid email address!";
}

try {
    console.log(validateEmail("johnexample.com"));
} catch (error) {
    console.log("Error Caught:" + error.message);
}

//finally
try {
    console.log("try block: The code is running...");
} catch (error) {
    console.log("Error Caught: " + error);
} finally {
    console.log("finally block: Executed in all cases.");
}