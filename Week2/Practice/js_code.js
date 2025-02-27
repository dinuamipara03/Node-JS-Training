//Write a JavaScript function to calculate the sum of two numbers.  
function sum(a,b){
    return a+b;
}
console.log(sum(9,8));

//Write a JavaScript program to find the maximum number in an array. 
let arr = [46,5786,987,56,467];
let ans = Math.max(...arr); // if only arr then ans is NaN & ... for spread
console.log(ans);

//Write a JavaScript function to check if a given string is a palindrome.
function palindrom(str){
    str1 = str.split('').reverse().join('');
    return str==str1? true:false;
    
} 
console.log(palindrom("rajan"));

//Write a JavaScript program to reverse a given string. 
let st = "rahi";
let str2= "";
for(let i = 0;i< st.length;i++){
    str2 = st.charAt(i) + str2;
}
console.log(str2)

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
let array = [1,2,3,4,5],array1=[];
for (i in array){
if(array[i]%2==0){
    array1.push(array[i]);
}}
console.log(array1)

//Write a JavaScript program to calculate the factorial of a given number.
function factorial(n){
    if(n==1){
        return 1;
    }else{
    return n*factorial(n-1);
}}
console.log(factorial(5));

//Write a JavaScript function to check if a given number is prime. 
function isPrime(num){
    if (num<=0){
        console.log("Please enter number more than zero.")
    }else if(num==1){
        console.log("Prime")
    }else{
        for(i=2;i<num/2;i++){
            console.log(num%i==0?"Not Prime":"Prime");
        }
    }
}
isPrime(5)
