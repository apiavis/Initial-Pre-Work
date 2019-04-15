/*Author: Alicia Piavis
  Title: Write Concise Declarative Functions with ES6
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to write concise declarative functions so that
    code is reduced and more clear.*/

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
