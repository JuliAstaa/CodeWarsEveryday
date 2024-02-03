const duplicateEncode = (word) => {
  word = word.toLowerCase();

  return word.replace(/./g, (match) =>
    word.indexOf(match) === word.lastIndexOf(match) ? "(" : ")"
  );
};
