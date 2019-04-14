/*Author: Alicia Piavis
  Title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use destructuring assignment with the rest operator
    to remove some elements from an array and assign them to variables, while
    placing the rest of the elements into a separate array.*/

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
