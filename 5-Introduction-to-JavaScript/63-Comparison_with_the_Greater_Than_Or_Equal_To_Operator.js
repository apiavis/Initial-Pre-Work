/*Author: Alicia Piavis
  Title: Comparison with the Greater Than or Equal To Operator
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the greater than or equal to operator >= to
    determine whether or not a value is greater than or equal to another value.
    If the value is greater than or equal to the one it is being compared to,
    the conditional returns true.*/

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
