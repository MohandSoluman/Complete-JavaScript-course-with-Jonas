'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};
const winGame = () => {
  displayMessage('True Number 😍😍😍');
  document.querySelector('.highScore').textContent = highScore;
  displayNumber(secreteNumber);
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '25rem';
};
const startGame = () => {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('NO Number 😫😫');
    return;
  }
  if (guess > 20 || guess < 0) {
    displayMessage('the Number is OUT of Range');
    return;
  }
  if (guess === secreteNumber) {
    highScore = score > highScore ? score : highScore;
    winGame();
    return;
  }

  if (score > 0) {
    displayMessage(
      guess > secreteNumber ? 'high number 😚😚😚😚' : 'Low Number 🙄🙄🙄🙄'
    );
    score--;
    document.querySelector('.score').textContent = score;
    return;
  }
  displayMessage('YOU LOSS THE GAME 😪😪😪😪😪😪😪');
  displayNumber(secreteNumber);
});

document.querySelector('.again').addEventListener('click', startGame);
