/*Author: Alicia Piavis
  Title: Use Destructuring Assignment to Assign Variables from Objects
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use destructuring assignment to assign values from
    objects to variables.*/

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
