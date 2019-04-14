/*Author: Alicia Piavis
  Title: Create Strings Using Template Literals
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to use template literals to create multi-line strings
    and remove the need to use concatentation with the + operator.*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
