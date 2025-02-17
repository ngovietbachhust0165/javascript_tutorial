'use strict';
// console.log(document.querySelector('.message').textContent); // class
// // document.querySelector('#message'); // id
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 20;
// console.log(document.querySelector('.guess').value); // with input field , to get the actual value
// document.querySelector('.guess').value = 23;
let secretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent = 'Correct Number!';
  const guess = Number(document.querySelector('.guess').value); // string type
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'you lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // When guess is too low
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
