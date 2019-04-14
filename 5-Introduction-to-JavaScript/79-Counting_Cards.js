/*Author: Alicia Piavis
  Title: Counting Cards
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to implement switch and if/else statements to write a
    short program that counts cards and tells a Blackjack player whether or not
    to bet.*/

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0){
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
