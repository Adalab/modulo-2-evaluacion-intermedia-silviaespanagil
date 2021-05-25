"use strict";

const button = document.querySelector(".js-button");
const userNumber = document.querySelector(".js-userNumber");
const clue = document.querySelector(".js-clue");
const tryCount = document.querySelector(".js-counter");
let counterStart = 0;
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

function counter() {
  tryCount.value = `Número de intentos: ` + (counterStart += 1);
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function clickButtonHandler() {
  numberVerification();
  counter();
}

/*window.addEventListener("load", getRandomNumber);*/
button.addEventListener("click", clickButtonHandler);
console.log("El número es: " + randomNumber);
