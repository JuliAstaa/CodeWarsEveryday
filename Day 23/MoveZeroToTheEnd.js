const moveZeros = (arr) => {
  const results = [];
  arr.filter((item) => item !== 0).map((item) => results.push(item));
  arr.filter((item) => item === 0).map((item) => results.push(item));
  return results;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
