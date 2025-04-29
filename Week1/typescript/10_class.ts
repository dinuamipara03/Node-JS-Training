//Members: Types
class Person {
    name: string;
  }
        
  const person = new Person();
  person.name = "Jane";
  
  console.log(person);

//Members: Visibility
/*
public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/
class Person1 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person1 = new Person1("Jane");
  
  console.log(person1.getName()); // person.name isn't accessible from outside the class since it's private

//readonly
/*
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
      
const person = new Person("Jane");

console.log(person.getName());
*/

//Inheritance: Implements
interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle(10,20);
  
  console.log(myRect.getArea());

//Inheritance: Extends
interface Shape {
    getArea: () => number;
  }
        
  class Rectangle1 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
        
  class Square extends Rectangle1 {
    public constructor(width: number) {
      super(width, width);
    }
    // getArea gets inherited from Rectangle
  }
  
  const mySq = new Square(20);
  
  console.log(mySq.getArea());

//Override
interface Shape {
    getArea: () => number;
  }
  
  class Rectangle2 implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string {
      return `Rectangle2[width=${this.width}, height=${this.height}]`;
    }
  }
  
  class Square1 extends Rectangle2 {
    public constructor(width: number) {
      super(width, width);
    }
  
    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square1[width=${this.width}]`;
    }
  }
  
  const mySq1 = new Square1(20);
  
  console.log(mySq1.toString());

  //abstract class - An abstract class is a class that cannot be instantiated directly. Instead, it serves as a blueprint for other classes. 
  abstract class Animal {
    constructor(public name: string) { }

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Woof!`);
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.makeSound();
dog.move();

cat.makeSound();
cat.move(); 