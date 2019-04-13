/*Author: Alicia Piavis
  Title: Comparisons with the Logical Or Operator
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the logical Or (||) operator to test more
    than one thing at a time. This can also be accomplished with nested if
    statements, but is much shorter through the use of the || operator. If at
    least one of the conditions returns true, the operation returns true.*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
  }

// Change this value to test
testLogicalOr(15);
