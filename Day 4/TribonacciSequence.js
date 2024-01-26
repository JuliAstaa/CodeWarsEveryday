const tribonacci = (signature, n) => {
  const num = signature.slice(0, n);
  if (n <= 3) {
    return num;
  } else {
    for (let i = 3; i < n; i++) {
      const result = num[i - 1] + num[i - 2] + num[i - 3];
      num.push(result);
    }
  }
  return num;
};

console.log(tribonacci([1, 1, 1]));
