const fibonacci = (n) => {
  const fibSequence = [0, 1];
  while (fibSequence.length < n) {
    const nextFibonacci =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextFibonacci);
  }

  return fibSequence;
};

console.log(fibonacci(5));
