/*Author: Alicia Piavis
  Title: Use the Rest Operator with Function Parameters
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the rest operator to create a function that takes
    a variable number of arguments.*/

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
