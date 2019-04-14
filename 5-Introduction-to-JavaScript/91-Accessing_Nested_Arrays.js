/*Author: Alicia Piavis
  Title: Accessing Nested Arrays
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to access nested arrays by chaining
    together bracket notation.*/

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
