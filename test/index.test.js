const { expect } = require("chai");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      for (let i = 0; i < 1000000; i++) {
        expect([1, 2, 3].indexOf(4)).to.eq(-1);
      }
    }).timeout(10000);
  });
})
