/*Author: Alicia Piavis
  Title: Compare Scopes of the var and let Keywords
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned that the 'let' keyword when used inside a block, statement,
    or expression, limits the scope of that variable to that section of code.*/

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
