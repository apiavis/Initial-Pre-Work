/*Author: Alicia Piavis
  Title: Replacing If Else Chains with Switch
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use a switch statement to replace many chained
    if/else if statements.*/

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
