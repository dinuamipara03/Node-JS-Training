var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
/*
//Type Inference
  const car = {
  type: "Toyota",
  };

  car.type = "Ford"; // no error

  car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

  console.log(car);
*/
//Optional Properties
// no error on optional property, remove it and see what happens
var car1 = {
    type: "Toyota"
};
car1.mileage = 2000;
console.log(car1);
