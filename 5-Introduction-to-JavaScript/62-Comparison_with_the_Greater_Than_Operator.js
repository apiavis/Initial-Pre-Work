/*Author: Alicia Piavis
  Title: Comparison with the Greater Than Operator
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the greater than operator > to determine
    whether or not a value is greater than another value.  If the value is greater
    than the one it is being compared to, the conditional returns true.*/

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
