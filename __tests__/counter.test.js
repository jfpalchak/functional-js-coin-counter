import { ChangeCalculator } from './../src/js/counter.js';

describe("ChangeCalculator", () => {
  test("should take in dollarAmount valued at 0 as an argument and return an empty string", () => {
    // Arrange
    const dollarAmount = 0;
    // Act
    const stringResult = ChangeCalculator(dollarAmount);
    // Assert
    expect(stringResult).toEqual("");
  });

  test("should take in dollarAmount valued at .04 as an argument and return 4 pennies.", () => {
    const dollarAmount = .04;
    const stringResult = ChangeCalculator(dollarAmount);
    expect(stringResult).toEqual("Pennies: 4, ");
  });

  test("should take in dollarAmount valued at .05 as an argument and return 1 nickel.", () => {
    const dollarAmount = .05;
    const stringResult = ChangeCalculator(dollarAmount);
    expect(stringResult).toEqual("Nickels: 1, ");
  });

  test("should take in dollarAmount valued at .08 as an argument and return 1 nickel, 3 pennies.", () => {
    const dollarAmount = .08;
    const stringResult = ChangeCalculator(dollarAmount);
    expect(stringResult).toEqual("Pennies: 3, Nickels: 1, ");
  });

  test("should take in dollarAmount valued at .10 as an argument and return 1 dime.", () => {
    const dollarAmount = .1;
    const stringResult = ChangeCalculator(dollarAmount);
    expect(stringResult).toEqual("Dimes: 1, ");
  });

  test("should take in dollarAmount valued at .16 as an argument and return 1 dime, 1 nickel, and 1 penny.", () => {
    const dollarAmount = .16;
    const stringResult = ChangeCalculator(dollarAmount);
    expect(stringResult).toEqual("Pennies: 1, Nickels: 1, Dimes: 1, ");
  });

  test("should take in dollarAmount valued at .25 as an argument and return 1 quarter.", () => {
    const dollarAmount = .25;
    const stringResult = ChangeCalculator(dollarAmount);
    expect(stringResult).toEqual("Quarters: 1.");
  });
  
  test("should take in dollarAmount valued at 1.41 as an argument and return 5 quarters, 1 dime, 1 nickel, and 1 penny.", () => {
    const dollarAmount = 1.41;
    const stringResult = ChangeCalculator(dollarAmount);
    expect(stringResult).toEqual("Pennies: 1, Nickels: 1, Dimes: 1, Quarters: 5.");
  });
});
