/*
// private
class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  let person = new Person('153-07-3130', 'John', 'Doe');
  //console.log(person.ssn); //Property 'ssn' is private and only accessible within class 'Person'.
*/
// protected
class Person {
    protected ssn: string;
    private firstName: string;
    private lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  let person = new Person('153-07-3130', 'John', 'Doe');
  //console.log(person.ssn);//Property 'ssn' is protected and only accessible within class 'Person' and its subclasses.

  /*
// public
class Person {
    // ...
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
    // ...
}
    */