//super
class Base {
    x: number;

    constructor(y) {
        this.x = y;
    }
}

class Derived extends Base {
    constructor(y) {
        super(y);
        console.log(this.x); 
    }
}
let myDerived= new Derived(34);

//Getters / Setters
class C {
    _length = 0;
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
  }

  //Class Heritage
  interface Pingable {
    ping(): void;
  }
   
  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }
   
  class Ball implements Pingable {
//   Class 'Ball' incorrectly implements interface 'Pingable'.
//     Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    pong() {
      console.log("pong!");
    }
  }