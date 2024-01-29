const likes = (names) => {
  if (names.length == 0) {
    return `no one likes this`;
  } else if (names.length == 1) {
    return `${names.join(" ")} likes this`;
  } else if (names.length == 2) {
    names.splice(1, 0, "and");
    return `${names.join(" ")} like this`;
  } else if (names.length == 3) {
    const twoAtFirst = names.slice(0, 2).join(", ");
    names.splice(0, 2, twoAtFirst);
    names.splice(1, 0, "and");
    return `${names.join(" ")} like this`;
  } else if (names.length >= 4) {
    const twoAtFirst = names.slice(0, 2).join(", ");
    const moreThan4 = names.slice(2, names.length).length;
    return `${twoAtFirst} and ${moreThan4} others like this`;
  }
};

console.log(likes(["Alex", "Jacob"]));
