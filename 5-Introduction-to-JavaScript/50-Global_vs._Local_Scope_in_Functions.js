/*Author: Alicia Piavis
  Title: Global vs. Local Scope in Functions
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to create a local variable with the same name as a
    global variable. However, in this case the value of the local variable takes
    precedence.*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
