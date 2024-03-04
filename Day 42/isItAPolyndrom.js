function isPalindrome(x) {
  x = x.toLowerCase();
  const str = x.split("");
  const strReversed = x.split("").reverse();
  console.log(str);
  console.log(strReversed);

  return str.join("") == strReversed;
}

console.log(isPalindrome("hello"));
