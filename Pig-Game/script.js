'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Decleraing variables which are initially zero.
let score, currentScore, activePlayer, playing;

const reloadGame = function () {
  console.log('reload clicked');

  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  console.log(playing);

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// Setting initial values.
reloadGame();

// Switch the player function.
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Adding click event on btnRoll.
btnRoll.addEventListener('click', function () {
  if (playing) {
    //    1. Generate the random number.
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    //   2. Set the image as per the dice number.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;

    //   If diceNumber is not 1 then:
    if (diceNumber !== 1) {
      currentScore += diceNumber;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // If diceNumber is 1 then change the player:
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Adding the currentScore to the score.
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    currentScore = 0;

    if (score[activePlayer] >= 20) {
      playing = false;
      document.querySelector('.dice').classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  reloadGame();
});
