/*Author: Alicia Piavis
  Title: Chaining If Else Statements
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to chain if else statements for more complex logic.
    Statements are still executed in a top to bottom fashion.*/

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);
