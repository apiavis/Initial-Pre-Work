/*Author: Alicia Piavis
  Title: Write Concise Object Literal Declarations Using Simple Fields
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to write concise object literal declarations so that
    code is not redundant.*/

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return ({name, age, gender});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
