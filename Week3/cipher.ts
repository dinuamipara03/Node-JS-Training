//use ciser cipher to encrypt - decrypt

let str:string = "gita";
let key:number = 3;

//example usage:
let encryptedStr: string = caesarCipher(str, key);
console.log("Encrypted:", encryptedStr);

let decryptedStr: string = caesarCipher(encryptedStr, -key);
console.log("Decrypted:", decryptedStr);

function caesarCipher(str: string, key: number): string {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        } else {
            result += str[i];
        }
    }
    return result;
}

