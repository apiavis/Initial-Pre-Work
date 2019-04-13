/*Author: Alicia Piavis
  Title: Understanding Uninitialized Variables
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned that mathematical operations performed on a variable that
    has not been initialized will return a result of NaN (not a number). In
    addition, if concatenating a string with an uninitialzed variable, the result
    will be undefined.*/

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";
