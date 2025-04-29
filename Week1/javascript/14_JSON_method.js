/*
JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
*/
//JSON.stringify
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);

  //Formatting: space
  let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  console.log(JSON.stringify(user, null, 2));

  //JSON.parse

  let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

  let user1 = JSON.parse(userData);
  console.log(user1);
  
  console.log( user1.friends[1] ); // 1