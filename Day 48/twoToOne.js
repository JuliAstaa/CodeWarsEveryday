/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

const longest = (a, b) => {
  const iterables = (a + b).split("").sort();
  return iterables
    .filter((char, index) => char != iterables[index - 1])
    .join("");
};
console.log(longest("aretheyhere", "yestheyarehere"));
