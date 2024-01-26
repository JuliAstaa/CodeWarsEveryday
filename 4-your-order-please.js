const order = (words) => {
  return words
    .split(" ")
    .sort((a, b) => {
      const angka1 = parseInt(a.match(/\d+/)[0], 10);
      const angka2 = parseInt(b.match(/\d+/)[0], 10);
      return angka1 - angka2;
    })
    .join(" ");
};

console.log(order("is2 Thi1s T4est 3a"));
