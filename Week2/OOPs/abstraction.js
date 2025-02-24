// Abstraction example
function per(fname, lname) {
	let firstname = fname;
	let lastname = lname;

	let getDetails_noaccess = function () {
		return (`First name is: ${firstname} Last name is: ${lastname}`);
	}

	this.getDetails_access = function () {
		return (`First name is: ${firstname}, Last name is: ${lastname}`);
	}
}
let person2 = new per('Mukul', 'Latiyan');
console.log(person2.firstname);
console.log(person2.getDetails_noaccess);
console.log(person2.getDetails_access());
