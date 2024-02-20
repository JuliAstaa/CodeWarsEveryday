const findShort = (s) => {
  const shortest = s
    .split(" ")
    .map((word) => word.length)
    .sort((a, b) => a - b);
  return shortest[0];
};
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
