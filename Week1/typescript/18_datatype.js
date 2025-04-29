//Number Types
var decimalValue = 10;
var hexaDecimalValue = 0xf10b;
var binaryValue = 52;
var octalValue = 264;
//String Types
var firstName = "Kunal"; // using double quotes
var lastName = 'Chowdhury'; // using single quotes
var message = "Hi, my name is: ".concat(firstName, " ").concat(lastName);
var spannedMessage = "Hi,\nMy name is: ".concat(firstName, " ").concat(lastName);
//Boolean Types
var isPrimaryAccount = true;
var hasCards = false;
//Enum Types
var CardTypes;
(function (CardTypes) {
    CardTypes[CardTypes["Debit"] = 0] = "Debit";
    CardTypes[CardTypes["Credit"] = 1] = "Credit";
    CardTypes[CardTypes["Virtual"] = 2] = "Virtual";
})(CardTypes || (CardTypes = {}));
var card = CardTypes.Debit;
//Void Types:In general, this type of data types are used in functions that do not return any value. For example, function showMessage(): void { ... }. In TypeScript, you can also declare a variable of type void, but can only assign undefined or null to them. We will discuss about undefined and null types in the next points.
//Null types
var nullValue = null;
//Undefined types
var undefinedValue = undefined;
//Any types
var dynamicValue = "Kunal Chowdhury";
dynamicValue = 100;
dynamicValue = 101;
dynamicValue = true;
var dynamicList = ["Kunal Chowdhury", "Free User", 21, true];
//Never types
function throwError(message) {
    throw new Error(message);
}
//Array types
var marks1 = [80, 85, 75];
var marks2 = [80, 85, 75];
//Tuple types
// correct
var person1 = ["Kunal", 2018];
// error
//let person2: [string, number] = [2018, "Kunal"];
