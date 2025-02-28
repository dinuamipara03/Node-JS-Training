// Display Current Day
let date= new Date();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is:",daylist[date.getDay()])

//Get Current Date in Various Formats(mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy)
let mm = date.getMonth()+1;
let dd = date.getDate();
let yyyy = date.getFullYear()

console.log(mm+'/'+dd+'/'+yyyy)
console.log(mm+'-'+dd+'-'+yyyy)
console.log(dd+'/'+mm+'/'+yyyy)
console.log(dd+'-'+mm+'-'+yyyy)

//Calculate Area of Triangle (Sides: 5, 6, 7)
let side1 = 5; 
let side2 = 6; 
let side3 = 7; 
let s = (side1 + side2 + side3) / 2;
let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area.toPrecision(5));

//Check Leap Year
function leap(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leap(2025));

//Random Integer Guess Game
var num=Math.floor(Math.random()*10);
function random(n){   
   return (n==num)?"Good Match":"Not Good"    
}
console.log("random is",num,random(2))

//Sum Two Integers (Triple if Equal)
function sumTripal(num1,num2){
return num1==num2?num1*3:num1+num2;
}
console.log(sumTripal(3,3),sumTripal(2,3))

//Difference Between Number and 13
function Difference(n){
    return n<=0?13-n:n-13;
}
console.log(Difference(35))

//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
function equal(n1,n2){
    return n1==50 || n2==50 || n1+n2==50?true:false;
}
console.log(equal(50,25))
console.log(equal(20,30))

//Write a JavaScript program to check two given integers whether one is positive and another one is negative.   
function positiveNegative(x,y){
    return (x>0&&y<0)||(x<0&&y>0)?true:false;
}
console.log(positiveNegative(2,2),positiveNegative(-2,2),positiveNegative(2,-2))

// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 
function py(str){
    return ( str.substring(0, 2) === 'Py')?str:"Py"+str;
}
console.log(py("Python"),py("ninja"))