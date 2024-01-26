const narcissistic = (value) => {
  const numArray = value.toString().split("");
  return numArray
    .map((num) => Math.pow(parseInt(num), numArray.length))
    .reduce((acc, curr) => acc + curr, 0) === value
    ? true
    : false;
};

console.log(narcissistic(123));
