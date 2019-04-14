/*Author: Alicia Piavis
  Title: Nesting For Loops
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to nest for loops to iterate through a JS nested array
    to manipulate or output sub-elements of the array.*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = arr[i][j] * product;
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
