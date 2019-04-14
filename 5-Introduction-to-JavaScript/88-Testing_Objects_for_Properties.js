/*Author: Alicia Piavis
  Title: Testing Objects for Properties
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use the .hasOwnProperty method of objects to test
    whether or not a property for a given object exists.*/

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];
  }
  return "Not Found";
}


// Test your code by modifying these values
checkObj("gift");
