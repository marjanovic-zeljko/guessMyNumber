"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  //Neki broj koji se iz stringa pretvara u number zbog kasnijeg poredjenja
  let guess = Number(document.querySelector(".guess").value);

  //*Ako je broj nula
  if (!guess) {
    document.querySelector(".message").textContent = "Wrong number ❌";
  }

  //*Refactoring code
  //*Ako je broj manji
  else if (guess < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too low 〽️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over 😿";
    }
  }
  //*Ako je broj veci
  else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high ↑↑↑";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over";
    }
  }
  //*Ako je pogodjen broj
  else if (guess === number) {
    document.querySelector(".message").textContent = "Winner 🍾🍾🍾";
    document.querySelector("body").style.backgroundColor = "#32CD32";
    document.querySelector(".number").style.color = "#333";

    //* Ako je broj taj pokazi highscore taj
    if (guess === number) {
      document.querySelector(".highscore").textContent = number;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgb(117, 116, 116)";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.color = "#eee";
  let number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = number;
});
