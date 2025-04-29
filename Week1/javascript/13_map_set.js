//map
/*
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.size ); // 3


//Map can also use objects as keys.
let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log( visitsCountObj["[object Object]"] ); // 123


//set
/*
new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/
let set = new Set();

let jony = { name: "jony" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(jony);
set.add(pete);
set.add(mary);
set.add(jony);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // jony (then Pete and Mary)
}

//weekmap
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
//weakMap.set("ok", "Whoops"); 

//weekset
let visitedSet = new WeakSet();

let ram = { name: "ram" };
let shyam = { name: "shyam" };
let marry = { name: "Marry" };

visitedSet.add(ram); // ram visited us
visitedSet.add(shyam); // Then shyam
visitedSet.add(ram); // ram again

// visitedSet has 2 users now

// check if ram visited?
console.log(visitedSet.has(ram)); // true

// check if Marry visited?
console.log(visitedSet.has(marry)); // false

ram = null;

// visitedSet will be cleaned automatically