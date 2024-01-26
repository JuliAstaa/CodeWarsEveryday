const persistence = (num) => {
  const finalResult = [];
  const numArr = [num];
  for (let i = 0; i < numArr.length; i++) {
    let number = numArr[numArr.length - 1].toString().split("");
    if (number.length != 1) {
      const result = number.reduce(
        (acc, curr) => parseFloat(acc) * parseFloat(curr),
        1
      );
      numArr.push(result);
      finalResult.push(result);
    }
  }
  return finalResult.length;
};
