//++++++++++++++++++++++++++++++++++object methods++++++++++++++++++++++++++++++++++++++++


/*
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName; //for fullname
    }
  };
  console.log(person.fullName())


  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return (this.firstName + " " + this.lastName).toUpperCase(); //for uppercase
    }
  };
  console.log(person.fullName())

    


  //+++++++++++++++++++++++++++++++++++++String methods+++++++++++++++++++++++++++++++++++

  
  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // console.log(text.length); //for cal. length
  // console.log(text.charAt(3)); //for finding chart at specific point
  // console.log(text.charCodeAt(3)); //ascii value
  // console.log(text.at(3));
  // console.log(text[3]); //property access

  //slice
  let fruit = "Apple, Banana, Kiwi";
  // console.log(fruit.slice(7,12))
  // console.log(fruit.slice(7))
  // console.log(fruit.slice(-10))
  // console.log(fruit.slice(3,12))

  //substring The difference is that start and end values less than 0 are treated as 0 in substring().
  console.log(fruit.substring(7, 13))

  //substr() The difference is that the second parameter specifies the length of the extracted part.
  console.log(fruit.substr(7, 9))

  //uppercase
  let line = "this File for JavAscript";
  console.log(line.toUpperCase())
  console.log(line.toLowerCase())


  //concat
  let word1 = "Hello";
  let word2 = "JS"
  console.log(word1.concat(" ", word2))

  //trim
  let text2 = "            hello             "
  console.log(text2.trimStart())
  console.log(text2.trimEnd())
  console.log(text2.trim())
  

  //padding

  let text3 = "5";
  console.log(text3.padStart(4,"0"));
  console.log(text3.padEnd(4,"x"));
   
  
  //repeat
  let text4 = "Hello world!";
  console.log(text4.repeat(2));

  //replace-case sensitive
  let text5 = "Please visit Microsoft!";
  console.log(text5.replace("Microsoft", "W3Schools"));
  console.log(text5.replace("MICROSOFT", "W3Schools"));
  console.log(text5.replace(/MICROSOFT/i, "W3Schools")); //incasesensitive

  let text6 = "Please visit Microsoft and learn about Microsoft!";
  console.log(text6.replace(/Microsoft/g, "W3Schools")); //global
  console.log(text6.replaceAll("Microsoft", "W3Schools"));

//split
  let text7="hello world";
  console.log(text7.split(' '))//[ 'hello', 'world' ]

    */

//+++++++++++++++++++++++++++++++++++++++set+++++++++++++++++++++++++++++++++++++
/*
const letters = new Set(["a","b","c"]);
console.log(letters.size)
console.log(letters.add("d"))
console.log(letters.has("d")) //ans in boolean
*/


//++++++++++++++++++++++++++++++++++++++++map+++++++++++++++++++++++++++++++++++++

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits.get("apples"))
console.log(fruits.set("apples",600))
console.log(fruits.size)
console.log(fruits.delete("apples"))
console.log(fruits.has("apples"))
fruits.clear()
console.log(fruits.size)