"use strict";

const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const scoreOne = document.getElementById("score--one");
const scoreTwo = document.getElementById("score--two");

const btnRoll = document.querySelector(".btn-roll-0");
const btnHold = document.querySelector(".btn-hold-0");
const btnRestart = document.querySelector(".btn-restart");

let playerActive, playing, score;

const init = function () {
  playerActive = 0;
  score = [0, 0];
  playing = true;

  btnHold.classList.add("hidden");
};

init();

const switchPlayer = function () {
  document.getElementById(`player--${playerActive}`);
  playerActive = playerActive === 0 ? 1 : 0;
  playerOne.classList.toggle("player-active");
  playerTwo.classList.toggle("player-active");
  btnRoll.classList.toggle("btn-roll-1");
  btnHold.classList.toggle("btn-hold-1");
};

//Rolling number
btnRoll.addEventListener("click", function () {
  if (playing) {
    const number = Math.trunc(Math.random() * 11) + 1;
    score[playerActive] += number;
    document.getElementById(`score--${playerActive}`).textContent =
      score[playerActive];

    switchPlayer();
    if (score[playerActive] >= 11) {
      btnHold.classList.remove("hidden");
    } else {
      btnHold.classList.add("hidden");
    }
  }
  if (score[playerActive] >= 21) {
    btnRoll.classList.add("hidden");
    btnHold.classList.add("hidden");
    switchPlayer();
  }
  if (!playing) {
    summary0 = score[0] - 21;
    summary1 = score[1] - 21;
    if (summary0 < 0) summary0 * -1;
    if (summary1 < 0) summary1 * -1;
    if (summary0 > summary1) {
      playerOne.classList.toggle("winner");
    } else {
      playerTwo.classList.toggle("winner");
    }
  }
});

//Holding score
btnHold.addEventListener("click", function () {
  playing = false;
});

//Restart game
//btnRestart.addEventListener("click", init);
