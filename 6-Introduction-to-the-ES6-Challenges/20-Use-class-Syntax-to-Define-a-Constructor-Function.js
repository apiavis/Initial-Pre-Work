/*Author: Alicia Piavis
  Title: Use class Syntax to Define a Constructor Function
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use class syntax to replace constructor function
    creation in order to make class creation easier.*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
