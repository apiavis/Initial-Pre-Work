/*Author: Alicia Piavis
  Title: Generate Random Whole Numbers with JS
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to generate random whole numbers in JS using the
    Math.random() function along with a multiplying factor and the Math.floor()
    function, which rounds the value down to the nearest whole number.*/

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random()*10);
}
