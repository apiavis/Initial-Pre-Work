/*Author: Alicia Piavis
  Title: Stand in Line
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to write a function with two parameters that adds an
    element to the end of an array, removes an element from the beginning of
    an array, and then returns the value of the removed element when the function
    is invoked.*/

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var oneDown = arr.shift();
  return oneDown;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
