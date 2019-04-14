/*Author: Alicia Piavis
  Title: Prevent Object Mutation
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to prevent object mutation by using the Object.freeze()
    function.  After the object is frozen, it cannot be mutated in any way.*/

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
