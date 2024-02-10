function getGrade(s1, s2, s3) {
  score = (s1 + s2 + s3) / 3;
  switch (true) {
    case score >= 90 && score <= 100:
      return "A";
    case score >= 80 && score < 90:
      return "B";
    case score >= 70 && score < 80:
      return "C";
    case score >= 60 && score < 70:
      return "D";
    default:
      return "F";
  }
}

console.log(getGrade(70, 70, 100));
