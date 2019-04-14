/*Author: Alicia Piavis
  Title: Mutate an Array Declared with const
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to mutate an array declared with 'const' by modifying
    individual elements in the array, rather than using the assignment operator
    to point the variable identifier to a different array.*/

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // change code above this line
}
editInPlace();
