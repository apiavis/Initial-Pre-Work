/*Author: Alicia Piavis
  Title: Using Objects for Lookups
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use an object to lookup values. This can reduce code,
    rather than using a switch statement or if/else chain.*/

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
