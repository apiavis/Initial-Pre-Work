/*Author: Alicia Piavis
  Title: Manipulate Arrays With unshift()
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to add an element to the beginning of an array using
    the unshift() function.*/

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);
