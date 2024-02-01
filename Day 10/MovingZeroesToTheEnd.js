function moveZeros(arr) {
  const zero = arr.filter((item) => item === 0);
  const results = arr.filter((item) => item !== 0);
  return results.concat(zero);
}

console.log(
  moveZeros([
    "a",
    "b",
    "c",
    "d",
    1,
    1,
    3,
    [],
    1,
    9,
    {},
    9,
    +0,
    +0,
    +0,
    +0,
    +0,
    +0,
    +0,
    +0,
    +0,
    +0,
  ])
);
