//use ciser cipher to encrypt - decrypt
var str = "gita";
var key = 3;
//example usage:
var encryptedStr = caesarCipher(str, key);
console.log("Encrypted:", encryptedStr);
var decryptedStr = caesarCipher(encryptedStr, -key);
console.log("Decrypted:", decryptedStr);
function caesarCipher(str, key) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        }
        else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        }
        else {
            result += str[i];
        }
    }
    return result;
}
