// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;



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



function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function redChange(event) {
  redSelector.value = redBalls;
  numRedBallsDisplay.innerText = 'Anzahl rote Kugeln: ' + redBalls;
}
function blueChange(event) {
  blueSelector.value = blueBalls;
  numBlueBallsDisplay.innerText = 'Anzahl blaue Kugeln: ' + blueBalls;
}

redSelector.addEventListener('change', redChange);

blueSelector.addEventListener('change', blueChange);

moreRed.addEventListener('click', function() {
  if (redBalls + blueBalls < 8) {
    redBalls++;
    redChange();
  }
});
lessRed.addEventListener('click', function() {
  if (redBalls > 0) {
    redBalls--;
    redChange();
  }
});

moreBlue.addEventListener('click', function() {
  if (redBalls + blueBalls < 8) {
    blueBalls++;
    blueChange();
  }
});
lessBlue.addEventListener('click', function() {
  if (blueBalls > 0) {
    blueBalls--;
    blueChange();
  }
});

// Draw Logic
let drawBallButton = document.getElementById('drawBall');
let drawnBallDisplay = document.getElementById('drawnBall');
let displayBalls = document.getElementById('displayBalls');

let drawnBall = 999;

drawBallButton.addEventListener('click', function() {
  if (true) {
    let drawnNumber = getRandomInt(8);
    drawnBallDisplay.style.backgroundImage = 'none';
    // console.log(drawnNumber);

    displayBalls.classList.add('spinAnimation');
    setTimeout(function() {
      displayBalls.classList.remove('spinAnimation');
      if (drawnNumber > 2) {

        drawnBallDisplay.style.backgroundImage =
          "url('https://cdn.jsdelivr.net/gh/benongithub/bingo-app-color@master/blue_ball_transparent.png')";
      } else {
        drawnBallDisplay.style.backgroundImage =
          "url('https://cdn.jsdelivr.net/gh/benongithub/bingo-app-color@master/red_ball_transparent.png')";
      }
    }, 2000);
  }
});

let checkSolutionButton = document.getElementById("check-solution");
checkSolutionButton.addEventListener("click", function() {
  document.getElementById("selectBalls").style.backgroundColor = "#ffffff";
  setTimeout(function() {
    if(redBalls == 2 && blueBalls == 6) {
      document.getElementById("selectBalls").style.backgroundColor = "#00ff00";
    } else {
      document.getElementById("selectBalls").style.backgroundColor = "#ff0000";
    }
  }, 500);
});

let audioLock = false;

let messageAudio = document.getElementById("message");
messageAudio.addEventListener('click', function() {
  if(!audioLock) {
    new Audio("https://cdn.jsdelivr.net/gh/benongithub/secret-color-app@master/Message-Alex.m4a").play()
    audioLock = true;
    setTimeout(function() {
      audioLock = false;
    }, 15000);
  }
});