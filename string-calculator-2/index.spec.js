const StringCalculator = require("./index");

const expectations = [
    [0, ""],
    [1, "1"],
    [2, "2"],
    [15, "15"],
    [2, "1,1"],
    [3, "1,2"],
    [4, "2,2"],
    [5, "2,2,1"],
    [220, "12,200,8"],
    [21, "1,2,3,4,5,6"],
    [6, "1\n2,3"],
    [6, "1,2\n3"],
    [6, "1\n2\n3"],
    [3, "//;\n1;2"],
    [8, "//+\n3+5"],
    [12, "//*\n3*9"],
    [2, "//!!!\n1!!!1"],
    [4, "//!!!\n1!!!1!!!2"],
];

describe("test sum function", () => {
  it("result should be number", () => {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.add("");
    expect(typeof result === "number" || result instanceof Number).toBe(true);
  });

  test.each(expectations)(
    'add should return %d for "%s"',
    (expectation, input) => {
      const stringCalculator = new StringCalculator();
      expect(stringCalculator.add(input)).toEqual(expectation);
    }
  );
});
