const sumStr = (a, b) => {
  a = parseInt(a) || 0;
  b = parseInt(b) || 0;
  return (a + b).toString();
};
console.log(sumStr("", "5"));
