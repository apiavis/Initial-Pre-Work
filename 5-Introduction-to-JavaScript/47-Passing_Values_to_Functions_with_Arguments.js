/*Author: Alicia Piavis
  Title: Passing Values to Functions with Arguments
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to pass arguments to a function. Until actual values are
    passed, parameters act as placeholders in the function.*/

// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(param1, param2) {
  console.log(param1 + param2)
}

functionWithArgs(2, 3);
