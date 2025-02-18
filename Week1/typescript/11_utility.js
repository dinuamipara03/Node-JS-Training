var pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);
//Record
var nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameAgeMap);
var bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);
var bob1 = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bob1);
var value = true;
// a string cannot be used here since Exclude removed it from the type.
console.log(typeof value);
/*
//readonly
interface Person {
    name: string;
    age: number;
}

const person: Readonly<Person> = {
    name: "Dylan",
    age: 35,
};

person.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
*/ 
