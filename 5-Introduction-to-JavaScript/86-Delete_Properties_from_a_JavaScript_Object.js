/*Author: Alicia Piavis
  Title: Delete Properties from a JS Object
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to delete properties from a JS object using either
    dot notation or bracket notation.*/

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.
delete myDog.tails;
