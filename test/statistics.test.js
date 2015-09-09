/**
 * Tests for analyze().
 *
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var statistics = require("../src/statistics");
var expect = require("chai").expect;

describe("analyze", function() {

    // Exceptions
    it("analyze(null]; should throw TypeError", function(done) {
        expect(function() { statistics.analyze(null); }).to.throw(TypeError);
        done();
    });

    it("analyze([]); should throw Error", function(done) {
        expect(function() { statistics.analyze([]); }).to.throw(Error);
        done();
    });

    // Return values
    it("analyze([4, 2, 6, 1, 3, 7, 5, 3]; should return {{max: 7, mean: 4, median: 4, min: 1, mode: [3], range: 6}}", function(done) {
        expect(statistics.analyze([4, 2, 6, 1, 3, 7, 5, 3])).to.eql({max: 7, mean: 3.875, median: 3.5, min: 1, mode: [3], range: 6});
        done();
    });

    it("analyze([3, 1, 2, -5, 9, 2, -5, 3, 10, 4, 1, 0, -1, 7]; should return {{max: 7, mean: 4, median: 4, min: 1, mode: [3], range: 6}}", function(done) {
        expect(statistics.analyze([3, 5, 2, -5, 9, 2, -5, 5, 10, 4, 1, 0, -1, 9, 0])).to.eql({max: 10, mean: 2.6, median: 2, min: -5, mode: [-5, 0, 2, 5, 9], range: 15});
        done();
    });
});
