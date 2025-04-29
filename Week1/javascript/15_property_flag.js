/*
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
*/
let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  console.log( JSON.stringify(descriptor, null, 2 ) );

//non-writable
let user1 = {
    name: "John"
  };
  
  Object.defineProperty(user1, "name", {
    writable: false
  });
  
  user1.name = "Pete";//no change
console.log(user1.name)

//non-enumerable
let user3 = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  
  Object.defineProperty(user3, "toString", {
    enumerable: false
  });
  
  // Now our toString disappears:
  for (let key in user3) console.log(key); // name

  //non-configurable
  let user4 = {
    name: "John"
  };
  
  Object.defineProperty(user4, "name", {
    configurable: false
  });
  
  user4.name = "Pete"; // works fine
  delete user4.name; // Error
  console.log(user4)