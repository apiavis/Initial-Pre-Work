/*Author: Alicia Piavis
  Title: Generate Random Whole Numbers within a Range
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to generate random whole numbers within a range in JS
    using Math.floor(Math.random() * (max - min + 1)) + min;.*/

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(100, 200);
