/*Author: Alicia Piavis
  Title: Comparison with the Strict Equality Operator
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the strict equality operator ==+ to determine
    whether or not two values are strictly equivalent.  If the values seem
    equivalent but are different data types, the conditional returns false.*/

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
