/*Author: Alicia Piavis
  Title: Multiple Identical Options in Switch Statements
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to build switch statements when multiple cases will
    lead to the same output value.*/

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
