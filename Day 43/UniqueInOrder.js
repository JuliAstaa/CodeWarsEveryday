const uniqueInOrder = (iterables) =>
  [...iterables].filter((char, index) => char != iterables[index - 1]);

console.log(uniqueInOrder("AABBCXCBSBASJKDKJ"));
