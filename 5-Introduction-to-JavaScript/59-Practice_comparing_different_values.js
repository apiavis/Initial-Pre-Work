/*Author: Alicia Piavis
  Title: Practice Comparing Different Values
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the strict equality operator === versus
    the standard equality operator ==. In addition, the typeof operator in JS
    will help you determine what data type a variable or value is.*/

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
