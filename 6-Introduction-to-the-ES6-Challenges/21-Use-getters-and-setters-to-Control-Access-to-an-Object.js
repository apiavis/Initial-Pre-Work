/*Author: Alicia Piavis
  Title: Use getters and setters to Control Access to an Object
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use getters and setters to get a value from an
    object and set the value of a property in an object.*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
