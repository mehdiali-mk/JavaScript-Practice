'use strict';

const number1El = document.querySelector('.number1');
const number2El = document.querySelector('.number2');
const resultEl = document.querySelector('.result');
const userAnswerEl = document.querySelector('#user-answer');
const btnSubmitEl = document.querySelector('.btn--submit');
const btnNextEl = document.querySelector('.btn--next');
const btnResetEl = document.querySelector('.btn--reset');
const scoreEl = document.querySelector('.score-number');
const trueFalseEl = document.querySelector('.true-false-icon');
const wrongEl = document.querySelector('.wrong-number');

let totalScore = 0;
let totalWrong = 0;
let result;

const setNewValue = function () {
  number1El.textContent = Math.trunc(Math.random() * 13) + 1;
  number2El.textContent = Math.trunc(Math.random() * 10) + 1;
  resultEl.textContent = '?';
  userAnswerEl.value = '';
  result = number1El.textContent * number2El.textContent;
  trueFalseEl.classList.add('hidden');
  btnSubmitEl.classList.remove('hidden');
  btnNextEl.classList.add('hidden');
  userAnswerEl.disabled = false;
  userAnswerEl.focus();
};

const submitAnswer = function () {
  const userAnswer = Number(userAnswerEl.value);
  console.log(userAnswer, result);

  trueFalseEl.classList.remove('hidden');
  if (userAnswer === result) {
    totalScore++;
    trueFalseEl.src = 'Resources/tick.svg';
  } else {
    if (totalScore > 0) {
      totalScore--;
    }
    totalWrong++;
    trueFalseEl.src = 'Resources/cross.svg';
  }

  resultEl.textContent = result;
  console.log(resultEl.textContent);
  scoreEl.textContent = totalScore;
  wrongEl.textContent = totalWrong;
  userAnswerEl.disabled = true;
  btnSubmitEl.classList.add('hidden');
  btnNextEl.classList.remove('hidden');
};

setNewValue();

// When user click on submit button.
userAnswerEl.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    submitAnswer();
  }
  btnNextEl.focus();
});

btnSubmitEl.addEventListener('click', function () {
  submitAnswer();
  btnNextEl.focus();
});

btnNextEl.addEventListener('click', function () {
  setNewValue();
});

btnResetEl.addEventListener('click', function () {
  setNewValue();
  scoreEl.textContent = 0;
  wrongEl.textContent = 0;
  totalScore = 0;
});
