function palindrome(str: string): string {
    const res: string = str.replace(/[\s.,]/g, '').trim();
    const reversed: string = res.split('').reverse().join('');
    return res === reversed ? "Palindrome: " + res : "Not Palindrome: " + res; 
}

console.log(palindrome("bar, rab")); 
console.log(palindrome("hello"));

//from usser
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (input: string) => {
  console.log(palindrome1(input));
  rl.close();
});

function palindrome1(input: string): string {
    const res: string = input.replace(/[\s.,_]/g, '').trim();
    const reversed: string = res.split('').reverse().join('');
    return res === reversed ? "Palindrome: " + res : "Not Palindrome: " + res;
}
