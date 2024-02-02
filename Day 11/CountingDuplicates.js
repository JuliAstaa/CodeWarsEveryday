function duplicateCount(text) {
  text = text.toLowerCase();

  let duplicate = {};
  let results = [];

  for (char of text) {
    if (duplicate[char]) {
      duplicate[char] += 1;
    } else {
      duplicate[char] = 1;
    }
  }

  for (key in duplicate) {
    if (duplicate[key] > 1) {
      console.log(duplicate);
      results.push(duplicate[key]);
    }
  }
  return results.length;
}

console.log(duplicateCount("Indivisibilities"));
