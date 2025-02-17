//Addition (+)
console.log(2 + 2);
console.log(true + 2);

//Addition assignment (+=)
let a = 2;
console.log((a += 3));

//Assignment (=)
let x = 2;
const y = 3;

console.log(x);
console.log((x = y + 1));

//Bitwise AND (&)
const b = 5; // 00000000000000000000000000000101
const c = 3; // 00000000000000000000000000000011

console.log(b & c);

//Bitwise AND assignment (&=)
let d = 5; // 00000000000000000000000000000101
d &= 3; // 00000000000000000000000000000011

console.log(d); 

//Bitwise NOT (~)
const e = 5; // 00000000000000000000000000000101
console.log(~e);

//Bitwise OR (|)
const f = 5; // 00000000000000000000000000000101
const g = 3; // 00000000000000000000000000000011

console.log(f | g);

//Bitwise OR assignment (|=)
let h = 5; // 00000000000000000000000000000101
h |= 3; // 00000000000000000000000000000011

console.log(h);

//Bitwise XOR (^)
const i = 5; // 00000000000000000000000000000101
const j =

//Bitwise XOR assignment (^=)
// let a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011

console.log(a); 3; // 00000000000000000000000000000011

console.log(i ^ j);

//Bitwise XOR assignment (^=)
let k = 5; // 00000000000000000000000000000101
k ^= 3; // 00000000000000000000000000000011

console.log(k); 

//Comma operator (,)
let l = 1;
l = (l++, l);
console.log(l);

//Conditional (ternary) operator
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); 

//Decrement (--)
let m = 3;
const n = m--;

console.log(`m:${m}, n:${n}`);// output: "m:2, n:3"

let o = 3;
const p = --o;

console.log(`o:${o}, p:${p}`);// output: "o:2, p:2"

//Division (/)
console.log(12 / 2);

//Division assignment (/=)
let q = 3;

q /= 2;
console.log(q);

//Equality (==)
console.log(1 == 1);
console.log(0 == false);

//Exponentiation (**)
console.log(3 ** 4);
console.log(10 ** -2);

//Exponentiation assignment (**=)
let r = 3;
console.log((r **= 2));

//Greater than (>)
console.log(5 > 3);

//Greater than or equal (>=)
console.log(3 >= 3);

//Grouping operator ( ) 
console.log(1 + 2 * 3); // 1 + 6

//Increment (++)
let s = 3;
const t = s++;
console.log(`s:${s}, t:${t}`);// output: "s:4, t:3"

let u = 3;
const v = ++u;
console.log(`u:${u}, v:${v}`);// output: "u:4, v:4"

//Inequality (!=)
console.log(1 != 1);

//Left shift (<<)
const w = 5; // 00000000000000000000000000000101
const z = 2; // 00000000000000000000000000000010

console.log(w << z);//x * 2 ** y

//Left shift assignment (<<=)
let a1 = 5; // 00000000000000000000000000000101

a1 <<= 2; // 00000000000000000000000000010100

console.log(a1);

//Less than (<)
console.log(5 < 3);

//Less than or equal (<=)
console.log(3 <= 3);

//Logical AND (&&)
const a2 = 3;
const b2 = -2;

console.log(a2 > 0 && b2 > 0);

//Logical AND assignment (&&=)
let a3 = 1;
a3 &&= 2;
console.log(a3);

//Logical NOT (!)
const a4 = 3;
const b4 = -2;

console.log(!(a4 > 0 || b4 > 0));

//Logical OR (||)
const a5 = 3;
const b5 = -2;

console.log(a5 > 0 || b5 > 0);

//Logical OR assignment (||=)
const b1 = { duration: 50, title: "" };
b1.duration ||= 10;
console.log(b1.duration);
b1.title ||= "title is empty.";
console.log(b1.title);

//Multiplication (*)
console.log(3 * 4);

//Multiplication assignment (*=)
let a6 = 2;

console.log((a6 *= 3));

//Nullish coalescing assignment (??=)
const a7 = { duration: 50 };

a7.speed ??= 25;
console.log(a7.speed);// Expected output: 25

a7.duration ??= 10;
console.log(a7.duration);// Expected output: 50

//Nullish coalescing operator (??)
const foo = null ?? "default string";
console.log(foo);// Expected output: "default string"
  
const baz = 0 ?? 42;
console.log(baz);// Expected output: 0

//Remainder (%)
console.log(13 % 5);

//Remainder assignment (%=)
let a8 = 3;
console.log((a8 %= 2));

//Right shift (>>)
const c1 = 5; //  00000000000000000000000000000101
const c2 = 2; //  00000000000000000000000000000010
const c3 = -5; //  11111111111111111111111111111011

console.log(a >> c2); //  00000000000000000000000000000001
console.log(c3 >> c2);

//Right shift assignment (>>=)
let a9 = 5; //  00000000000000000000000000000101

a9 >>= 2; //  00000000000000000000000000000001
console.log(a9);

//Spread syntax (...)
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));

//Strict equality (===)
console.log(1 === 1);
console.log("1" === 1);

//Strict inequality (!==)
console.log(1 !== 1);

//Subtraction (-)
console.log(5 - 3);

//Subtraction assignment (-=)
let b3 = 2;
console.log((b3 -= 3));

//Unsigned right shift (>>>)
const c4 = 5; //  00000000000000000000000000000101
const c5 = 2; //  00000000000000000000000000000010
const c6 = -5; //  11111111111111111111111111111011

console.log(c4 >>> c5); //  00000000000000000000000000000001
console.log(c6 >>> c5); 

//Unsigned right shift assignment (>>>=)
let c7 = 5; //  00000000000000000000000000000101

c7 >>>= 2; //  00000000000000000000000000000001
console.log(c7);

//yield*
function* func1() {
    yield 42;
  }
  
  function* func2() {
    yield* func1();
  }
  
  const iterator = func2();
  
  console.log(iterator.next().value);