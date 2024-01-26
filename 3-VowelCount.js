const getCount = (str) =>
  !str.match(/[aeoiu]/gi) ? 0 : str.match(/[aeoiu]/gi).length;

console.log(getCount("my pyx"));
