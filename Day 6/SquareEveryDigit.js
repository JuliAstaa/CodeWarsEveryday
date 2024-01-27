const squareDigits = (num) => {
  const strNum = num.toString().split("");
  return parseInt(
    strNum
      .map((number) => {
        return parseInt(number) ** 2;
      })
      .join("")
  );
};

console.log(squareDigits(104));
