function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((char) => char.charCodeAt(0) - 96)
    .filter((char) => char >= 0 && char <= 26)
    .join(" ");
}
console.log(alphabetPosition(""));
