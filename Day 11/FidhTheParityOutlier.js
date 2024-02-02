const findOutlier = (integers) => {
  let evenOrOdd = {
    even: [],
    odd: [],
  };

  for (number of integers) {
    if (number % 2 == 0) {
      evenOrOdd.even.push(number);
    } else {
      evenOrOdd.odd.push(number);
    }
  }

  for (key in evenOrOdd) {
    if (evenOrOdd[key].length === 1) {
      return parseInt(evenOrOdd[key].join());
    }
  }

  return evenOrOdd;
};

console.log(findOutlier([1, 1, 0, 1, 1]));
