/*Author: Alicia Piavis
  Title: Comparison with the Less Than or Equal To Operator
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the less than or equal to operator <= to
    determine whether or not a value is less than or equal to another value.
    If the value is less than or equal to the one it is being compared to,
    the conditional returns true.*/

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);
