let array = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5];
let uniqueArray = [];
function getUniqueArray(array) {
for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) { 
        uniqueArray.push(array[i]);
    }
}return uniqueArray;
}
console.log(getUniqueArray(array));

//2
let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5];
let uniqueArr = [...new Set(arr)]; 
console.log(uniqueArr);
