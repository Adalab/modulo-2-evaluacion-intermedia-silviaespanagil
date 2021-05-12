"use strict";
//validacion numero si el numero es mayor o igual a 1 o menor o igual a 100
const button = document.querySelector(".js-button");
const userNumber = document.querySelector(".js-userNumber");
const clue = document.querySelector(".js-clue");
const counter = document.querySelector(".js-counter");
const randomNumber = getRandomNumber(100);

function numberVerification() {
  const number = parseInt(userNumber.value);
  if (number > 100 || number < 1) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
  } else if (number < randomNumber) {
    clue.innerHTML = "Demasiado bajo";
  } else if (number > randomNumber) {
    clue.innerHTML = "Demasiado alto";
  } else if (number === randomNumber) {
    clue.innerHTML = "Has ganado campeona!!!";
  }
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

window.addEventListener("load", getRandomNumber);
button.addEventListener("click", numberVerification);
console.log("El número es: " + randomNumber);
