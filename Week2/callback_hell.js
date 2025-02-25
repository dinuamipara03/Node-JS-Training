//Callback Hell in JavaScript can be defined as the situation where we have nested callbacks(functions passed as arguments to other functions) which makes the code difficult to read and debug.
function task1(callback) {
    setTimeout(() => {
        console.log("Task One completed");
        callback();
    },);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task Two completed");
        callback();
    },);
}

task1(function () {
    task2(function () {
        console.log("Both tasks completed");
    });
});
