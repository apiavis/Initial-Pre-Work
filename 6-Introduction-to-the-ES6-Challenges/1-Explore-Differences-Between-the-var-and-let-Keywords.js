/*Author: Alicia Piavis
  Title: Explore Differences Between the var and let Keywords
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the 'let' keyword instead of 'var' in ES6 version of
    JS in order to prevent yourself from declaring a variable twice (overwriting
    a variable accidentally).*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
