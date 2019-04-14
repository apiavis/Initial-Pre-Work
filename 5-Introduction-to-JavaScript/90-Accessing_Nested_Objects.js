/*Author: Alicia Piavis
  Title: Accessing Nested Objects
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to access the sub-properties of objects by chaining
    together dot and/or bracket notation.*/

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
