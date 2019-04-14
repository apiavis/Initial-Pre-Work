/*Author: Alicia Piavis
  Title: Iterate Through an Array with a For Loop
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to iterate through a JS array using a for loop to
    add the total value of all array elements in the array.*/

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
