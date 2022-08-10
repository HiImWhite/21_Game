"use strict";

const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const scoreOne = document.getElementById("score--one");
const scoreTwo = document.getElementById("score--two");

const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const btnRestart = document.querySelector(".btn-restart");

let playerActive, playing, score;

const init = function () {
  playerActive = 0;
  score = 0;
  playing = true;
};

init();

//Rolling number
btnRoll.addEventListener("click", function () {
  if (playing) {
    const number = Math.trunc(Math.random() * 11) + 1;
    score += number;
    document.getElementById(`score--${playerActive}`).textContent = score;
  }
});
