const enhancer = require("./enhancer.js");

//item

let test = {
  name: "Test",
  enhancement: 6,
  durability: 75
};

describe("enhancer.js", () => {
  //repair test
  describe("repair() function", () => {
    it("repair item by returning durability as 100", () => {
      expect(enhancer.repair(test)).toStrictEqual({
        name: "Test",
        enhancement: 6,
        durability: 100
      });
    });
  });
  //success test
  describe("success() function", () => {
    it("enhancement increase by 1, if at 20 it will not change, durability stays the same", () => {
      expect(enhancer.succeed(test)).toStrictEqual({
        name: "Test",
        enhancement: 7,
        durability: 75
      });
    });
  });
  //fail test
  describe("fail() function", () => {
    it("failure test", () => {
      expect(enhancer.fail(test)).toStrictEqual({
        name: "Test",
        enhancement: 6,
        durability: 70
      });
    });
  });
});
