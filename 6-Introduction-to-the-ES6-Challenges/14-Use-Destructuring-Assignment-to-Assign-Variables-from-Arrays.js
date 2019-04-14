/*Author: Alicia Piavis
  Title: Use Destructuring Assignment to Assign Variables from Arrays
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use destructuring assignment to assign values from
    arrays to variables.*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
