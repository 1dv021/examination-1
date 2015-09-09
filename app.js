/**
 * Starting point of the application.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var statistics = require("./src/statistics");
var descriptiveInformation;

descriptiveInformation = statistics.analyze([20, 4, 1, 2, -1, 2, 13, 2, 1, 5, 5, 5, 5, 20, 20]);
console.log(descriptiveInformation);

descriptiveInformation = statistics.analyze([3, 5, 2, -5, 9, 2, -5, 5, 10, 4, 1, 0, -1, 9, 0]);
console.log(descriptiveInformation);

descriptiveInformation = statistics.analyze([4, 2, 6, 1, 3, 7, 5, 3, 7]);
console.log(descriptiveInformation);

descriptiveInformation = statistics.analyze([4, 8, 2, 4, 5]);
console.log(descriptiveInformation);
