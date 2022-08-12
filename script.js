"use strict";

const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const scoreOne = document.getElementById("score--0");
const scoreTwo = document.getElementById("score--1");

const btnRoll = document.querySelector(".btn-roll-0");
const btnHold = document.querySelector(".btn-hold-0");
const btnRestart = document.querySelector(".btn-restart");

let playerActive, playing, score;

//Starting conditions
const init = function () {
  playerActive = 0;
  score = [0, 0];
  playing = true;

  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;

  btnHold.classList.add("hidden");
  playerOne.classList.remove("player-winner");
  playerTwo.classList.remove("player-winner");
  playerOne.classList.add("player-active");
  playerTwo.classList.remove("player-active");
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
    if (btnRoll.classList === "hidden" && btnHold.classList === "hidden") {
      switchPlayer();
    }
  }
});

//Holding score
btnHold.addEventListener("click", function () {
  switchPlayer();
});

//Restart game
btnRestart.addEventListener("click", init);
