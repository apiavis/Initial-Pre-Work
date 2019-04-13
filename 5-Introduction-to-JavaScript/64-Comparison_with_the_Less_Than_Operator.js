/*Author: Alicia Piavis
  Title: Comparison with the Less Than Operator
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the less than operator < to determine
    whether or not a value is less than another value.  If the value is less
    than the one it is being compared to, the conditional returns true.*/

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
