// versi barbar
const solution = (number) => {
  if (number < 0) return 0;
  let multipliesBy3 = [];
  let multipliesBy5 = [];
  for (let i = 3; i < number; i += 3) {
    multipliesBy3.push(i);
  }

  for (let i = 5; i < number; i += 5) {
    multipliesBy5.push(i);
  }

  const sumMultipliesBy3 =
    multipliesBy3.length == 0
      ? 0
      : multipliesBy3
          .filter((item) => !multipliesBy5.includes(item))
          .reduce((acc, curr) => acc + curr);
  const sumMultipliesBy5 =
    multipliesBy5.length == 0
      ? 0
      : multipliesBy5.reduce((acc, curr) => acc + curr);
  return sumMultipliesBy3 + sumMultipliesBy5;
};

// versi simple
const GPTsolution = (number) => {
  if (number < 0) return 0;

  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(GPTsolution());
