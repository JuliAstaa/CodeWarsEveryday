const count = (string) => {
  if (string === "") return {};
  let countChar = {};
  for (let char of string) {
    if (countChar[char]) {
      countChar[char]++;
    } else {
      countChar[char] = 1;
    }
  }

  return countChar;
};

console.log(count("I Made Juli Astawa"));
