function add(a, b) {
  const results = BigInt(a) + BigInt(b);
  return results.toString(); // Fix me!
}

console.log(add("1", "1"));
