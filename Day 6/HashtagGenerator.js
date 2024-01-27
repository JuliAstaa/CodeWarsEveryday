const generateHashtag = (str) => {
  const capitalizeEachWord = (sentence) => {
    return sentence.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  };
  const capitalize = capitalizeEachWord(str).split(" ").join("");
  return capitalize.length >= 140 || capitalize == ""
    ? false
    : `#${capitalize}`;
};

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
