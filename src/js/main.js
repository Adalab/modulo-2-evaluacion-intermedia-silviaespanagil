"use strict";

//constantes
const button = document.querySelector(".js-button");
const userNumber = document.querySelector(".js-userNumber");
const clue = document.querySelector(".js-clue");
const tryCount = document.querySelector(".js-counter");
let counterStart = 0;
const randomNumber = getRandomNumber(100);
const help = document.querySelector(".js-help");
const pcNumber = document.querySelector(".js-pcNumber");
//const hide = document.querySelector(".js-hidden");

//funciones

function numberVerification() {
  const form = document.querySelector(".js-body");
  const number = parseInt(userNumber.value);
  if (number > 100 || number < 1) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
  } else if (number < randomNumber) {
    clue.innerHTML = "Tu número es menor que el de la máquina";
  } else if (number > randomNumber) {
    clue.innerHTML = "El número que escogiste es muy alto";
  } else if (number === randomNumber) {
    clue.innerHTML = "¡Ganaste!";
    clue.classList.add("js-winner");
    form.classList.add("js-hidden");
    tryCount.classList.add("js-hidden");
    help.classList.add("js-hidden");
  }
}

function counter() {
  tryCount.innerHTML = parseInt((counterStart += 1));
}

function helpButton() {
  help.scrollTop = help.scrollHeight;
  if (tryCount.innerHTML > 5) {
    help.classList.remove("js-hidden");
  }
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function helpGiven() {
  help.classList.add("js-hidden");
  pcNumber.classList.remove("js-numberhidden");
  pcNumber.innerHTML = "El número ganador era el " + randomNumber;
  button.classList.add("js-hidden");
}

function clickButtonHandler() {
  numberVerification();
  counter();
  helpButton();
}

//eventos

window.addEventListener("load", getRandomNumber);
button.addEventListener("click", clickButtonHandler);
help.addEventListener("click", helpGiven);
console.log("El número es: " + randomNumber);
