'use strict';

//Selecting Elements:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const imgDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0,
  activePlayer = 0,
  playing = true,
  scores = [0, 0];
//rolling Dice functionality
const init = () => {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  imgDice.classList.add('hidden');
};

init();
const changePlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. generate random number
    const randDice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice
    imgDice.src = `dice-${randDice}.png`;
    imgDice.classList.remove('hidden');
    // 3. check for num >1 or not and switch
    if (randDice !== 1) {
      currentScore += randDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    imgDice.classList.add('hidden');
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      imgDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      changePlayer();
    }
  }
});
btnNew.addEventListener('click', init);
