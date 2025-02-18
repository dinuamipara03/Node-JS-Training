var animals = ['cat', 'dog', 'lion', 'wolf', 'deer'];
console.log("Simple for:");
for (var i_1 = 0; i_1 < animals.length; i_1++) {
    // Prints i-th element of the array 
    console.log(animals[i_1]);
}
console.log("For...of:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var i_2 = animals_1[_i];
    // Print each element of the array 
    console.log(i_2);
}
console.log("For...in:");
for (var i_3 in animals) {
    // Print each element of the array 
    console.log(i_3, animals[i_3]);
}
var i = 2;
console.log("while:");
while (i < 4) {
    console.log("Block statement execution no." + i);
    i++;
}
var j = 2;
console.log("do...while:");
do {
    console.log("Block statement execution no." + j);
    j++;
} while (j < 4);
