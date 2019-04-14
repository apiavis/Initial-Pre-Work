/*Author: Alicia Piavis
  Title: Set Default Parameters for Your Functions
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to set default parameters for functions so that a default
    value is used when an argument is not specified.*/

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
