//TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
//Partial
interface Point {
    x: number;
    y: number;
  }
              
  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.x = 10;
  
  console.log(pointPart);


//Required
  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
              
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };
  
  console.log(myCar);


//Record
  const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
  };
  
  console.log(nameAgeMap);


//Omit
  interface Person {
    name: string;
    age: number;
    location?: string;
  }
      
  const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
  };
  
  console.log(bob);


//Pick
  interface Person {
    name: string;
    age: number;
    location?: string;
  }
              
  const bob1: Pick<Person, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };
  
  console.log(bob1);


//Exclude
  type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = true;
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