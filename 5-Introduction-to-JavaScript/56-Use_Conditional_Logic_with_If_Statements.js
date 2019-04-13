/*Author: Alicia Piavis
  Title: Use Conditional Logic with if Statements
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use if statements to make decisions in code. If
    the if statement evaluates to true, the statements inside the curly
    braces are exectued.  If the if statement evaluates to false, the statements
    inside the curly braces are not executed.*/

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
