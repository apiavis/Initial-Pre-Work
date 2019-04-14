/*Author: Alicia Piavis
  Title: Write Arrow Functions with Parameters
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to write arrow functions with parameters, which allows
    for multiple arguments to be passed into the function.*/

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
