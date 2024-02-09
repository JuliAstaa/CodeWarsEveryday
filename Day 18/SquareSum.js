const squareSum = (numbers) =>
  numbers.map((num) => num ** 2).reduce((acc, curr) => acc + curr, 0);

console.log(squareSum([1, 2, 3]));
