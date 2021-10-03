var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('calculates the factorial of 5', () => {
      // Setup
      const expectedResult = 120;
      const input = 5;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });

    it('calculates the factorial of any positive number', () => {
      // Setup
      const expectedResult = 6;
      const input = 3;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });

    it('calculates the factorial of 0', () => {
      // Setup
      const expectedResult = 1;
      const input = 0;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });
  });
});
