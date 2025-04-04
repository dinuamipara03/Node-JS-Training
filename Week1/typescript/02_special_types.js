//any
var v = true;
v = "string"; // no error as it can be "any" type
console.log(Math.round(v));
//unknown
var w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
//never
//let d: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
//undefined
var y = undefined;
console.log(typeof y);
//null
var z = null;
console.log(typeof z);
