/*Author: Alicia Piavis
  Title: Assignment with a Returned Value
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to take the return value of a function and assign
    it to a variable.*/

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
