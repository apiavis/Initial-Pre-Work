/*Author: Alicia Piavis
  Title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use destructuring assignment while passing an object
    into a function.  This eliminates extra code.*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half ({ max, min }) {
    return (max + min) / 2.0;
  }
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
