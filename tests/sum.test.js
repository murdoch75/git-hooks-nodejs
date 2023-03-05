const sum = require("../src/sum");

it("should return correct sum", () => {
  const result = sum(2, 6);
  expect(result).toEqual(8);
}, 70000);
