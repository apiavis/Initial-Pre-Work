/*Author: Alicia Piavis
  Title: Global Scope and Functions
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to create global and local variables. When var is not
    used in the variable declaration, the variable is automatically created in
    the global scope.*/

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
