const parser = require("./index");

const expectations = [
  ["-p", { printable: true, name: "", strings: [], numbers: [] }],
  ["", { printable: false, name: "", strings: [], numbers: [] }],
  //  ['-n "Hello Word"', { name: "Hello World" }],
  // ["-i 42", { number: 42 }],
  //  ["-s", { stringArray: ["this,is,a,list"] }],
  //  ["-n", { numbers: [1, 2, -3, 5] }],

  // ('-p -n "Hello -p World!" -i 42 -s this,is,a,list -n 1,2,-3,5',
  // {
  //   printable: true,
  //   name: "Hello World!",
  //   number: 42,
  //   stringArray: ["this,is,a,list"],
  //   numbers: [1, 2, -3, 5],
  // })
  //   ],
];

describe("command line parser", () => {
  test.each(expectations)(
    "roman called with %i should return %s",
    (input, expectedOutput) => {
      const output = parser.parse(input);
      expect(output).toEqual(expectedOutput);
    }
  );
});
