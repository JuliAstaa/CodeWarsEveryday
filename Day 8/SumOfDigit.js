const digitalRoot = (n) => {
  let numArr = n.toString().split("");
  if (numArr.length === 1) {
    return parseInt(numArr[0]);
  } else {
    return digitalRoot(
      numArr.reduce((acc, curr) => {
        return acc + parseInt(curr);
      }, 0)
    );
  }
};

console.log(digitalRoot(1234));
