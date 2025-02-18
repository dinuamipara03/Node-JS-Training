//var
function f() {
    var a = 10;
    return function g() {
      var b = a + 1;
      return b;
    };
  }
  var g = f();
  g(); // returns '11'




  //let
  function fun(input: boolean) {
    let a = 100;
    if (input) {
      // Still okay to reference 'a'
      let b = a + 1;
      return b;
    }
    // Error: 'b' doesn't exist here
    return b;
  }





  //const
  const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
};
// Error
kitty = {
  name: "Danielle",
  numLives: numLivesForCat,
};
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;