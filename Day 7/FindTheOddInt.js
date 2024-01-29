const findOdd = (num) => {
  let numObj = {};
  for (number in num) {
    let numValue = num[number];
    if (numObj[numValue]) {
      numObj[numValue] += 1;
    } else {
      numObj[numValue] = 1;
    }
  }

  for (keyObj in numObj) {
    if (numObj[keyObj] % 2 == 1) {
      return parseInt(keyObj);
    }
  }
};

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
