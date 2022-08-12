"use strict";

const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const scoreOne = document.getElementById("score--0");
const scoreTwo = document.getElementById("score--1");

const btnRoll = document.querySelector(".btn-roll-0");
const btnHold = document.querySelector(".btn-hold-0");
const btnRestart = document.querySelector(".btn-restart");

let playerActive, playing, score, summary1, summary2;

//Starting conditions
const init = function () {
  playerActive = 0;
  score = [0, 0];
  summary1 = 0;
  summary2 = 0;
  playing = true;

  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;

  btnHold.classList.add("hidden");
  btnHold.classList.remove("btn-hold-1");
  btnHold.classList.add("btn-hold-0");
  btnRoll.classList.remove("hidden");
  btnRoll.classList.remove("btn-roll-1");
  btnRoll.classList.add("btn-roll-0");

  playerOne.classList.add("player-active");
  playerTwo.classList.remove("player-active");

  playerOne.classList.remove("winner");
  playerTwo.classList.remove("winner");

  playerOne.classList.remove("draw");
  playerTwo.classList.remove("draw");

  playerOne.classList.remove("lose");
  playerTwo.classList.remove("lose");
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
    summary1 = 21 - score[0];
    summary2 = 21 - score[1];
    if (summary1 < 0) summary1 = summary1 * -1;
    if (summary2 < 0) summary2 = summary2 * -1;
    switchPlayer();
    if (score[playerActive] >= 11) {
      btnHold.classList.remove("hidden");
    } else {
      btnHold.classList.add("hidden");
    }
  }
  if (score[playerActive] >= 21) {
    switchPlayer();
    if (score[0] >= 21 && score[1] >= 21) {
      btnHold.classList.add("hidden");
      btnRoll.classList.add("hidden");
      if (summary1 < summary2) {
        playerOne.classList.add("winner");
        playerTwo.classList.add("lose");
      } else if (summary2 < summary1) {
        playerTwo.classList.add("winner");
        playerOne.classList.add("lose");
      }
    }
    if (score[0] === score[1]) {
      playerOne.classList.toggle("draw");
      playerTwo.classList.toggle("draw");
    }
  }
});

//Holding score
btnHold.addEventListener("click", function () {
  switchPlayer();
  if (score[playerActive] >= 11) {
    btnHold.classList.remove("hidden");
  } else {
    btnHold.classList.add("hidden");
  }
});

//Restart game
btnRestart.addEventListener("click", init);
