const Greeter = require("../Greeter");

describe("Greeter", () => {
  let grt;
  let currentDate;

  beforeEach(() => {
    currentDate = new Date();
    currentDate.setHours(7);
    currentDate.setMinutes(0);
    grt = new Greeter(currentDate);
  });

  test("should say hello", () => {
    const result = grt.greet();
    expect(result).toEqual("Hello");
  });

  test("should say hello to person", () => {
    const result = grt.greet("Jeremy");
    expect(result).toEqual("Hello Jeremy");
  });

  test("should trim extra spaces", () => {
    const result = grt.greet("    Jeremy  ");
    expect(result).toEqual("Hello Jeremy");
  });

  test("Should capitalize the first letter of the name", () => {
    const result = grt.greet("jeremy");
    expect(result).toEqual("Hello Jeremy");
  });

  test("should say good morning", () => {
    const result = grt.greet("jeremy");
    expect(result).toEqual("Good Morning Jeremy");
  });
});
