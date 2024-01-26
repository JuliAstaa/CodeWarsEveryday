//saya buat sendiri
const getSum = (a, b) => {
  if (a == b) {
    return a;
  }
  let num = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      num.push(i);
    }
  } else {
    for (let i = b; i <= a; i++) {
      num.push(i);
    }
  }
  return num.reduce((acc, curr) => acc + curr, 0);
};

//pnuya gpt
const getSumGPT = (a, b) => ((a + b) * (Math.abs(a - b) + 1)) / 2;

// ((1 + 0) * ((1- 0 )+ 1)) / 2
