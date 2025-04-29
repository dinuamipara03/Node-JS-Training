// Object Literal 
// Defining object
let person = {
	first_name: 'Mukul',
	last_name: 'Latiyan',

	//method
	getFunction: function () {
		return (`The name of the person is ${person.first_name} ${person.last_name}`)
	},
	//object within object
	phone_number: {
		mobile: '12345',
		landline: '6789'
	}
}
console.log(person.getFunction());
console.log(person.phone_number.landline);


// Object Constructor
// Using a constructor
function person1(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;
}
// Creating new instances of person object
let person2 = new person1('Mukul', 'Latiyan');
let person3 = new person1('Rahul', 'Avasthi');

console.log(person2.first_name);
console.log(`${person3.first_name} ${person3.last_name}`);


//ex
// Object.create() example a
// simple object with some properties
const coder = {
	isStudying: false,
	printIntroduction: function () {
		console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}.`)
	}
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();
