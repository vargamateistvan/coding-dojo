const wordwrap = (string, columnNumber) => {
  const NEW_LINE_CHAR = "\n";
  const SPACE_CHAR = " ";

  if (string.length < columnNumber) {
    return string;
  }

  const words = string.split(" ");
  let charNum = 0;
  words.forEach((word, index, array) => {
    charNum += word.length;
    if (charNum > columnNumber) {
      array[index - 1] = array[index - 1].concat(NEW_LINE_CHAR);
      charNum = 0;
    }
    // array[index] = array[index].concat(SPACE_CHAR);
  });

  return words.join("");
};

module.exports = wordwrap;
