class CommandLineParser {
  constructor(parameters) {
    this.parameters = parameters;
  }

  parse(input) {
    const raw = input.split("");

    const defaults = this.parameters.reduce((acc, item) => {
      if (item.type === "boolean") acc[item.outputKey] = false;
      if (item.type === "string") acc[item.outputKey] = "";
      if (item.type === "stringArray") acc[item.outputKey] = [];
      if (item.type === "numArray") acc[item.outputKey] = [];
      return acc;
    }, {});

    const almostResult = raw.reduce(
      (acc, char) => {
        if (acc.state.reading === "param") {
          const param = this.parameters.find((item) => item.parameter === char);
          acc.state.current = param;
          acc.state.reading = 'value';
          acc.result[param.outputKey] = true;
          acc.state = char;
          acc.state = "value";
        } else if (char === "-") {
          acc.state.reading = "param";
        }
        return acc;
      },
      {
        state: {
          reading: null,
          current: null,
          value: null,
        },
        result: defaults,
      }
    );

    const result = {};
    Object.entries(almostResult.result).forEach(([key, value]) => {
      if (value !== null) {
        result[key] = value;
      }
    });
    return result;
  }
}

const parser = new CommandLineParser([
  { parameter: "p", type: "boolean", outputKey: "printable" },
  { parameter: "n", type: "string", outputKey: "name" },
  { parameter: "i", type: "num", outputKey: "number" },
  { parameter: "s", type: "stringArray", outputKey: "strings" },
  { parameter: "n", type: "numArray", outputKey: "numbers" },
]);

// parser.parse('-p -n "Hello World!" -i 42 -s this,is,a,list -n 1,2,-3,5');

module.exports = parser;
