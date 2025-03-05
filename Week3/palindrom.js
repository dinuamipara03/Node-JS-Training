function palindrome(str){
    res = str.replace(/[\s.,]/g, '').trim();
    var reversed = res.split('').reverse().join('');
    return res === reversed?"Palindrome: "+res:"Not Palindrome: "+res;
}

console.log(palindrome("bar, rab")); 
console.log(palindrome("hello"));

//take input from user and check string is palindrome or not
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (input) => {
  console.log(palindrome(input));
  rl.close();
});

function palindrome(input){
    res = input.replace(/[\s.,_]/g, '').trim();
    var reversed = res.split('').reverse().join('');
    return res === reversed?"Palindrome: "+res:"Not Palindrome: "+res;
}

