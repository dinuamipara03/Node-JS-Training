function getRandomAnyElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 7, 4, 2, 9];
var colors = ['red', 'green', 'blue'];
console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));
