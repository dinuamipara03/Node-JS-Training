let a = 3, b = 4;
let ans = a??b; // means (a !== null && a !== undefined) ? a : b;
console.log(ans)