// Write a TypeScript program to declare and initialize a variable of type 'string', 'number', and'boolean'.
let brand:string = "Tata", num:number = 21, isValid:boolean = true;
console.log(brand, num, isValid)
console.log(typeof brand);
console.log(typeof num);
console.log(typeof isValid);

// Create a function that takes two numbers as parameters and returns their sum.
function add(a:number,b:number){
    return a+b;
}
console.log(add(4,5))

// Write a function that checks whether a given number is even or odd.
function oddEven(a:number){
    if(a%2==0){
        console.log(a,"is Even number")
    }else{
        console.log(a,"is Odd number")
    }
}
oddEven(9); oddEven(4)

// Define a tuple '[number, string]', assign values, and print them.
let tuple:[number,string] = [23,"ram"];
console.log(tuple)

// Write a function that takes an array of numbers and returns the maximum value.
function max(arr:number[]){
    return Math.max(...arr)
}
let y=max([1,2,3,4]);
console.log(y)

// Implement a function that reverses a string.
function reverse(str:string){
    return str.split("").reverse().join("")
}
let str1 = reverse("Hello")
console.log(str1)

// Write a function to merge two arrays and remove duplicates.
function mergeRemove(arr:number[], arr1:number[]){
    arr = arr.concat(arr1);
    return arr.filter((item, index) => arr.indexOf(item) === index)
} 
let x = [1,2,4,3,5], x1 = [5,3,6,7,6];
console.log(mergeRemove(x,x1).sort().toString())

// Implement a function to find the sum of all elements in an array.
let nums:number[] = [1,2,3,4,5];
let result = nums.reduceRight(function addArray(a,b){
    return a+b
})
console.log(result)

// Define an interface 'Person' with properties 'name: string' and 'age: number', then create an object of type 'Person'.
interface Person{
    name:string;
    age:number;
}
const Person = {
    name:"Dinaxi",
    age:21
}
console.log(Person.name,"is",Person.age,"years old.")

// Create an object with optional properties and check if a property exists before accessing it.
interface MyObject {
    id: number;
    name?: string; // Optional property
    description?: string; // Optional property
  }
  const obj1: MyObject = { id: 1 };
  const obj2: MyObject = { id: 2, name: "Example" };
  function processObject(obj: MyObject) {
    console.log(`ID: ${obj.id}`);
  
    if (obj.name !== undefined) {
      console.log(`Name: ${obj.name}`);
    }
    if (obj.description !== undefined) {
      console.log(`Description: ${obj.description}`);
    }
  }
  processObject(obj1);
  processObject(obj2);
  
  // Using the 'in' operator
  function processObject2(obj: MyObject) {
      console.log(`ID: ${obj.id}`);
    
      if ('name' in obj) {
        console.log(`Name: ${obj.name}`);
      }
      if ('description' in obj) {
        console.log(`Description: ${obj.description}`);
      }
    }
    processObject2(obj1);
    processObject2(obj2);

// Define a class 'Student' with properties 'name', 'rollNumber', and a method 'display()' to print details.
class Student{
    name:string;
    rollNumber:number
public constructor(name:string,rollNumber:number){
    this.name = name, this.rollNumber = rollNumber;
}

public display():string{
    return "Student name is "+this.name +" and rollno is "+ this.rollNumber;
}
}
let student = new Student("John",23);
console.log(student.display())

// Implement a class 'Car' with a constructor that takes 'brand' and 'year' and a method'getCarInfo()'.
class Car{
    brand:string;
    year:number
    public constructor(brand:string,year:number){
        this.brand=brand;this.year=year;
    }
    public getCarInfo():string|number{
        return "Brand is " + this.brand +" and year is " + this.year
    }
}
let car = new Car("Kia", 2022)
console.log(car.getCarInfo())

// Create a class 'Rectangle' with methods to calculate area and perimeter.
class Rectangle1{
    width:number;
    height:number
    public constructor(width:number,height:number){
        this.width = width; this.height = height;
    }
    public area():string | number{
        return "Area: " + this.width*this.height;
    }
    public perimeter():string | number{
        return "Perimeter: " + 2*(this.width+this.height);

    }
}
let rectangle = new Rectangle1(23,24);
console.log(rectangle.area(), rectangle.perimeter())

// Define an enum 'UserRole' with values 'Admin', 'User', and 'Guest'.
enum userRole{
    Admin,
    User,
    Guest
}

// Write a function to check if a given string is a palindrome.
function isPalindrom(str:string){
    let str2 = str.split("").reverse().join("");
    return str == str2?"Palindrom":"Not palindrom"
}
console.log(isPalindrom("nayan"))