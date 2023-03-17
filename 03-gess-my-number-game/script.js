'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = 'NO Number 😫😫';
  } else if (guess > 20 || guess < 0) {
    document.querySelector('.message').textContent =
      'the Number is OUT of Range';
  } else if (guess === secreteNumber) {
    highScore = score > highScore ? score : highScore;
    document.querySelector('.message').textContent = 'True Number 😍😍😍';
    document.querySelector('.highScore').textContent = highScore;
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
  } else if (guess > secreteNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'high number 😚😚😚😚';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'YOU LOSS THE GAME 😪😪😪😪😪😪😪';
      document.querySelector('.number').textContent = secreteNumber;
    }
  } else if (guess < secreteNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Low Number 🙄🙄🙄🙄';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'YOU LOSS THE GAME 😪😪😪😪😪😪😪';
      document.querySelector('.number').textContent = secreteNumber;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
});
