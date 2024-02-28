/* 
ROCK PAPER SCISSOR

Let's play! You have to return which player won! In case of a draw return Draw!.
*/

const rps = (p1, p2) => {
  const rules = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper",
  };

  if (rules[p1] == p2) return "Player 1 Won";
  if (rules[p2] == p1) return "Player 2 Won";
  return "Draw";
};

console.log(rps("scissor", "rock"));
