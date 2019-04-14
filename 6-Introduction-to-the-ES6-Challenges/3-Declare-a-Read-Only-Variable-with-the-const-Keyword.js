/*Author: Alicia Piavis
  Title: Declare a Read-Only Variable with the const Keyword
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the 'const' keyword to declare a variable that
    is not intended to change. The naming convention for a constant is all
    uppercase letters with words separated by an underscore.*/

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
