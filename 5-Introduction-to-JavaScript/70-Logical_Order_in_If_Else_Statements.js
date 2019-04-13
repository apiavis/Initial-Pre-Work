/*Author: Alicia Piavis
  Title: Logical Order in If Else Statements
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to properly order if else statements, since they are
    executed in a top to bottom fashion.*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
