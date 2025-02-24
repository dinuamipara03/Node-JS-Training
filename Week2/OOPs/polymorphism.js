// Method Overriding
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
dog.speak(); 

const cat = new Cat();
cat.speak();  

// Method Overloading (simulated)
class Calculator {
    add(a, b) {
        if (b === undefined) {
            return a + a; 
        }
        return a + b; 
    }
}

const calc = new Calculator();
console.log(calc.add(2)); 
console.log(calc.add(2, 3));
