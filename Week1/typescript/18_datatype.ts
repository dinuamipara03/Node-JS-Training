//Number Types
let decimalValue: number = 10;
let hexaDecimalValue: number = 0xf10b;
let binaryValue: number = 0b110100;
let octalValue: number = 0o410;

//String Types
let firstName: string = "Kunal"; // using double quotes
let lastName: string = 'Chowdhury'; // using single quotes
let message: string = `Hi, my name is: ${firstName} ${lastName}`;
let spannedMessage: string = `Hi,
My name is: ${firstName} ${lastName}`;

//Boolean Types
let isPrimaryAccount: boolean = true;
let hasCards: boolean = false;

//Enum Types
enum CardTypes { Debit, Credit, Virtual }
let card: CardTypes = CardTypes.Debit;

//Void Types:In general, this type of data types are used in functions that do not return any value. For example, function showMessage(): void { ... }. In TypeScript, you can also declare a variable of type void, but can only assign undefined or null to them. We will discuss about undefined and null types in the next points.

//Null types
let nullValue: null = null;

//Undefined types
let undefinedValue: undefined = undefined;

//Any types
let dynamicValue: any = "Kunal Chowdhury";
dynamicValue = 100;
dynamicValue = 0b1100101;
dynamicValue = true;
let dynamicList: any[] = [ "Kunal Chowdhury","Free User",21,true ];

//Never types
function throwError(message: string): never {
    throw new Error(message);
}

//Array types
let marks1: number[] = [80, 85, 75];
let marks2: Array<number> = [80, 85, 75];

//Tuple types
// correct
let person1: [string, number] = ["Kunal", 2018];

// error
//let person2: [string, number] = [2018, "Kunal"];