let wordwrap = require("./index");

describe("wordwrap function", () => {
  test("should return the same text when called with a short string", () => {
    expect(wordwrap("Hello World!", 80)).toEqual("Hello World!");
  });
  test("should break lined on boundary", () => {
    expect(wordwrap("almaa korte", 5)).toEqual("almaa\nkorte");
  });

  test("should break respecting word boundaries", () => {
    expect(wordwrap("a korte", 5)).toEqual("a\nkorte");
  });

//   test("should break respecting word boundaries with multiple lines", () => {
//     expect(wordwrap("aa bb cc ee ff", 3)).toEqual("aa\nbb\ncc\nee\nff");
//   });

  test("should break respecting word boundaries with multiple lines", () => {
    expect(wordwrap("alma bela cekla", 4)).toEqual("alma\nbela\ncekla");
  });

//   test("should break respecting word boundaries with multiple lines", () => {
//     expect(wordwrap("alma bela cekla denes", 10)).toEqual(
//       "alma bela\ncekla\ndenes"
//     );
//   });

//   test("should break respecting word boundaries with multiple lines", () => {
//     expect(wordwrap("a b szilva denes", 4)).toEqual("a\nb\nszilva\ndenes");
//   });
});
