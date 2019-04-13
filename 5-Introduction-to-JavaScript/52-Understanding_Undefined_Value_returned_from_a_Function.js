/*Author: Alicia Piavis
  Title: Understanding Undefined Value Returned from a Function
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to change the value of a global variable by ommitting
    a return statement and then calling the function.*/

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();
