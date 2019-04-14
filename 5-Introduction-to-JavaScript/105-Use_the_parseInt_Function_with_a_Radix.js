/*Author: Alicia Piavis
  Title: Use the parseInt Function with a Radix
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the parseInt() function in JS with a radix to
    parse a string and return a value calculated based on the radix, which specifies
    the base of the number in the string.*/

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
