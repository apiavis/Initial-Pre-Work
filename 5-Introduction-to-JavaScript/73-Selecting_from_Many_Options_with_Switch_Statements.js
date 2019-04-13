/*Author: Alicia Piavis
  Title: Selecting from Many Options with Switch Statements
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use switch statements to test a value and determine
    which case it fits, to define different possible outcomes for values.*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
