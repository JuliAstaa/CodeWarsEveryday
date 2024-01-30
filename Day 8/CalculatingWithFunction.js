const arrayDiff = (a, b) => a.filter((item) => !b.includes(item));
console.log(
  arrayDiff([1, 2, 22, , 3, 32, 4, 24, 24, 234, 23, 234, 423], [1, 2])
);
