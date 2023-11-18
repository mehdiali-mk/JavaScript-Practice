const rollDiceEl = document.querySelector(".roll-dice");
const dice1El = document.querySelector(".dice-1");
const dice2El = document.querySelector(".dice-2");
const p1ScoreEl = document.querySelector(".p1-score");
const p2ScoreEl = document.querySelector(".p2-score");
const resultEl = document.querySelector(".result");

let p1Score = 0,
  p2Score = 0;

rollDiceEl.addEventListener("click", function () {
  const rand1 = Math.trunc(Math.random() * 6) + 1;
  const rand2 = Math.trunc(Math.random() * 6) + 1;

  dice1El.src = `dice-${rand1}.png`;
  dice2El.src = `dice-${rand2}.png`;

  if (rand1 > rand2) {
    resultEl.textContent = "Player 1 is Winner ⛳";
    p1Score++;
    p1ScoreEl.textContent = p1Score;
  } else if (rand2 > rand1) {
    resultEl.textContent = "Player 2 is Winner ⛳";
    p2Score++;
    p2ScoreEl.textContent = p2Score;
  } else {
    resultEl.textContent = "Draw !";
  }

  //   console.log(dice1El);
  //   console.log(rand1);
});
