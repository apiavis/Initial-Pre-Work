/*Author: Alicia Piavis
  Title: Manipulate Arrays With shift()
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to remove an element from the beginning of an array using
    the shift() function. This also returns the value of the element that was
    removed.*/

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
