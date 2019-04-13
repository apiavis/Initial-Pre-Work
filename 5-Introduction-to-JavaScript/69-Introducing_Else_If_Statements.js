/*Author: Alicia Piavis
  Title: Introducing Else If Statements
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use else if statements to chain if statements
    together.*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
// Change this value to test
testElseIf(7);
