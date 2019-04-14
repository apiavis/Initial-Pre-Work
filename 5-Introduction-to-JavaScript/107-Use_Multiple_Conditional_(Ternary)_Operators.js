/*Author: Alicia Piavis
  Title: Use Multiple Conditional (Ternary) Operators
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to chain together conditional operators to simplifiy
    code when you might otherwise use a chain of if/else statement to check a
    condition.*/

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);
