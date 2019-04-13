/*Author: Alicia Piavis
  Title: Word Blanks
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to create a Mad Lib using the concatentation propreties
     of strings and variables.*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "My " + myNoun + ", which is very " + myAdjective +
  ", " + myVerb + " down the driveway " + myAdverb + ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("hat", "green", "tumbled", "slowly");
