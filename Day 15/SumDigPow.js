function sumDigPow(a, b) {
  let results = [];
  for (a; a < b; a++) {
    const pow = a
      .toString()
      .split("")
      .map((item, index) => parseInt(item) ** (index + 1))
      .reduce((acc, curr) => acc + curr);

    if (a == pow) results.push(pow);
  }
  return results;
}

console.log(sumDigPow(1, 100));
