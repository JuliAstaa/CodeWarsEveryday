function isIsogram(str) {
  str = str.toLowerCase();
  const countedChar = {};

  for (char of str) {
    if (countedChar[char]) {
      return false;
    }
    countedChar[char] = +1;
  }
  return true;
}

console.log(isIsogram("algorithm"));
