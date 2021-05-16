// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

let blueBallList = [];
let redBallList = [];

let redBalls = 0;
let blueBalls = 0;

// Input & Output Fields
let redSelector = document.getElementById('redSelector');
let numRedBallsDisplay = document.getElementById('numRedBalls');
let blueSelector = document.getElementById('blueSelector');
let numBlueBallsDisplay = document.getElementById('numBlueBalls');
// SelectButtons
let moreRed = document.getElementById('moreRed');
let lessRed = document.getElementById('lessRed');
let moreBlue = document.getElementById('moreBlue');
let lessBlue = document.getElementById('lessBlue');

let displayBall = document.getElementsByClassName('displayBall');
let displayBallList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let displayRedList = [];
let displayBlueList = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function redChange(event) {
  redBalls = redSelector.value;
  numRedBallsDisplay.innerText = 'Anzahl rote Kugeln: ' + redBalls;
}
function blueChange(event) {
  blueBalls = blueSelector.value;
  numBlueBallsDisplay.innerText = 'Anzahl blaue Kugeln: ' + blueBalls;
}

redSelector.addEventListener('change', redChange);

blueSelector.addEventListener('change', blueChange);

moreRed.addEventListener('click', function() {
  if (displayBallList.length > 0) {
    let redPos = displayBallList.pop();
    redBallList.push(redPos);
    redSelector.value = +redSelector.value + 1;
    redChange();
    displayBall[redPos].style.backgroundImage =
      "url('https://cdn.jsdelivr.net/gh/benongithub/bingo-app-color@master/red_ball_transparent.png')";
  }
});
lessRed.addEventListener('click', function() {
  if (redBallList.length > 0) {
    let redPos = redBallList.pop();
    displayBallList.push(redPos);
    redSelector.value = +redSelector.value - 1;
    redChange();
    displayBall[redPos].style.backgroundImage = 'none';
  }
});

moreBlue.addEventListener('click', function() {
  if (displayBallList.length > 0) {
    let bluePos = displayBallList.pop();
    blueBallList.push(bluePos);
    blueSelector.value = +blueSelector.value + 1;
    blueChange();
    displayBall[bluePos].style.backgroundImage =
      "url('https://cdn.jsdelivr.net/gh/benongithub/bingo-app-color@master/blue_ball_transparent.png')";
  }
});
lessBlue.addEventListener('click', function() {
  if (blueBallList.length > 0) {
    let bluePos = blueBallList.pop();
    displayBallList.push(bluePos);
    blueSelector.value = +blueSelector.value - 1;
    blueChange();
    displayBall[bluePos].style.backgroundImage = 'none';
  }
});

// Draw Logic
let drawBallButton = document.getElementById('drawBall');
let drawnBallDisplay = document.getElementById('drawnBall');
let displayBalls = document.getElementById('displayBalls');

let drawnBall = 999;

drawBallButton.addEventListener('click', function() {
  if (redBalls != 0 || blueBalls != 0) {
    if (drawnBall != 999) {
      displayBall[drawnBall].style.display = 'block';
    }
    let drawnNumber = getRandomInt(+redBalls + +blueBalls);
    drawnBallDisplay.style.backgroundImage = 'none';
    // console.log(drawnNumber);

    displayBalls.classList.add('spinAnimation');
    setTimeout(function() {
      displayBalls.classList.remove('spinAnimation');
      if (drawnNumber > redBalls) {
        drawnBall = blueBallList[0];
        displayBall[drawnBall].style.display = 'none';
        drawnBallDisplay.style.backgroundImage =
          "url('https://cdn.jsdelivr.net/gh/benongithub/bingo-app-color@master/blue_ball_transparent.png')";
      } else {
        drawnBall = redBallList[0];
        displayBall[drawnBall].style.display = 'none';
        drawnBallDisplay.style.backgroundImage =
          "url('https://cdn.jsdelivr.net/gh/benongithub/bingo-app-color@master/red_ball_transparent.png')";
      }
    }, 2000);
  }
});

let messageAudio = document.getElementById("message");
messageAudio.addEventListener('click', function() {
  messageAudio.play();
});