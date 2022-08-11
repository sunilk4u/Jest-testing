const calculator = require("./calculator");

test("Addition", () => {
  expect(calculator.add(1, 1)).toBe(2);
});
test("Subtraction", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});
test("Multiply", () => {
  expect(calculator.multiply(1, 1)).toBe(1);
});
test("Division", () => {
  expect(calculator.divide(1, 1)).toBe(1.0);
});
