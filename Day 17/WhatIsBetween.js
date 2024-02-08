/* 
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/

const between = (a, b) => {
  let results = [];
  for (a; a <= b; a++) {
    results.push(a);
  }
  return results;
};

console.log(between(1, 10));
