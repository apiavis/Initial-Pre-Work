/*Author: Alicia Piavis
  Title: Introducing Else Statements
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use else statements to combine multiple if
    statements into a single if/else statement. An else statement allows an
    alternative block of code to be executed if the initial condition returns
    false.*/

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
