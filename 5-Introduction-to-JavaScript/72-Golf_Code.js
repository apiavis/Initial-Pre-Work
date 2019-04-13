/*Author: Alicia Piavis
  Title: Golf Code
  Date: 4/13/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to apply the chaining of if else statements together in
    order to build a program that provides a golfer feedback based on how over,
    under, or equal to par they were on a hole.*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie"
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }

  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
