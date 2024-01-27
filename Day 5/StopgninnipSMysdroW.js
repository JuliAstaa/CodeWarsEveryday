const spinWords = (string) => {
  const stringArr = string.split(" ");
  return stringArr
    .map((a) => {
      if (a.length >= 5) {
        return a.split("").reverse().join("");
      }
      return a;
    })
    .join(" ");
};

console.log(spinWords("Just kidding there is still one more"));
