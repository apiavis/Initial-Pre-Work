/*Author: Alicia Piavis
  Title: Use the Spread Operator to Evaluate Arrays in Place
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the spread operator to copy the contents of one
    array into another new array.*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1] // change this line
})();
console.log(arr2);
