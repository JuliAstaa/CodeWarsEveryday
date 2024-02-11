const XO = (str) => {
  str = str.toLowerCase();
  o = str.split("").filter((item) => item === "o");
  x = str.split("").filter((item) => item === "x");
  console.log(o.length);
  console.log(x.length);
  return x.length === o.length ? true : false;
};

console.log(XO("zpzpzpp"));
