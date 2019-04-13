/*Author: Alicia Piavis
  Title: Adding a Default Option in Switch Statements
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to add a default option in switch statements to execute
    when there is no matching case statement found.*/

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
