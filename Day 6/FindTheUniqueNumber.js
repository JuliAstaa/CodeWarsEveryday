const findUniq = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }

  for (key in obj) {
    if (obj[key] == 1) {
      return parseFloat(key);
    }
  }
};

console.log(findUniq([3, 10, 3, 3, 3]));
