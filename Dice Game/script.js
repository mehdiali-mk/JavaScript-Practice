const rollDiceEl = document.querySelector(".roll-dice");
const dice1El = document.querySelector(".dice-1");
const dice2El = document.querySelector(".dice-2");
const resultEl = document.querySelector(".result");

rollDiceEl.addEventListener("click", function () {
  const rand1 = Math.trunc(Math.random() * 6) + 1;
  const rand2 = Math.trunc(Math.random() * 6) + 1;

  dice1El.src = `dice-${rand1}.png`;
  dice2El.src = `dice-${rand2}.png`;

  if (rand1 > rand2) {
    resultEl.textContent = "Player 1 is Winner ⛳";
  } else if (rand2 > rand1) {
    resultEl.textContent = "Player 2 is Winner ⛳";
  } else {
    resultEl.textContent = "Draw !";
  }

  //   console.log(dice1El);
  //   console.log(rand1);
});
