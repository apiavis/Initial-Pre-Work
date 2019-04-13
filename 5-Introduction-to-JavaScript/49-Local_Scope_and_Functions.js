/*Author: Alicia Piavis
  Title: Local Scope and Functions
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to create local variables. When a variable is declared
    within a function, it has a local scope.*/

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
