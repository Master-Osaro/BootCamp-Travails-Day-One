(function(){
  'use strict';

  var chai = require('jasmine'); 

var getPrimes = require('../app/getPrime.js')

  describe("Test cases for getPrimes function", function() {
      it("should return 'negative integers can not be prime' for negative integers", function() {
        expect(getPrimes(-23)).toEqual("negative integers can not be prime");
      });

      it("should return an empty array if argument is equal to 1", function() {
        expect(getPrimes(1)).toBe("1 is not a prime number");
      });

      it("should return an [2,3] if the argument passed is equal to 4", function() {
        expect(getPrimes(8)).toEqual([ 2, 3, 5, 7 ]);
      });

      it("should return an [2,3,5,7] if the argument passed is equal to 7", function() {
        expect(getPrimes(7)).toEqual([ 2, 3, 5, 7 ]);
      });

      it("should return an [ 2 ] if the argument passed is equal to 2", function() {
        expect(getPrimes(2)).toEqual([ 2 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11 ] if the argument passed is equal to 12", function() {
        expect(getPrimes(12)).toEqual([ 2, 3, 5, 7, 11 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11, 13, 17, 19 ] if the argument passed is equal to 20", function() {
        expect(getPrimes(40)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]);
      });

      it("should return the equivalent of getPrimes(29) if the argument passed is equal to getPrimes(30)", function() {
        expect(getPrimes(15)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
      });

      it("should return an [ 2, 3 ] if the argument passed is equal to 3", function() {
        expect(getPrimes(6)).toEqual([ 2, 3, 5]);
      });
    
  });
})();