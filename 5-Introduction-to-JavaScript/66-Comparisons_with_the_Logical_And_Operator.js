/*Author: Alicia Piavis
  Title: Comparisons with the Logical And Operator
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the logical and (&&) operator to test more
    than one thing at a time. This can also be accomplished with nested if
    statements, but is much shorter through the use of the && operator.*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
