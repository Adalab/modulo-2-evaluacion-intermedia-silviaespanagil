"use strict";

//constantes
const buttonV2 = document.querySelector(".js-button");
const userNumberV2 = document.querySelector(".js-userNumber");
const clueV2 = document.querySelector(".js-clue");
const tryCountV2 = document.querySelector(".js-counter");
let counterStartV2 = 0;
const randomNumberV2 = getRandomNumber(100);
const help = document.querySelector(".js-help");
const pcNumber = document.querySelector(".js-pcNumber");
const form = document.querySelector(".js-body");

//funciones

function numberVerification() {
  const number = parseInt(userNumberV2.value);
  if (number > 100 || number < 1) {
    clueV2.innerHTML = "El número debe estar entre 1 y 100";
  } else if (number < randomNumberV2) {
    clueV2.innerHTML =
      "Tu número es menor que el de la máquina...intenta de nuevo";
  } else if (number > randomNumberV2) {
    clueV2.innerHTML = "Uy! ese número es muy alto... indica  uno menor";
  } else if (number === randomNumberV2) {
    clueV2.innerHTML = "¡Ganaste!";
    clueV2.classList.add("js-winner");
    form.classList.add("js-hidden");
    tryCountV2.classList.add("js-hidden");
    help.classList.add("js-hidden");
  }
}

function counter() {
  tryCountV2.innerHTML =
    "Llevas " + parseInt((counterStartV2 += 1)) + " intentos";
}
console.log(counterStartV2);

function helpButton() {
  // help.scrollTop = help.scrollHeight;
  if (parseInt(counterStartV2) > 5) {
    help.classList.remove("js-hidden");
  }
}

function helpGiven() {
  pcNumber.innerHTML = "El número ganador era el " + randomNumberV2;
  pcNumber.classList.remove("js-numberhidden");
  help.classList.add("js-hidden");
  userNumberV2.classList.add("js-hidden");
  buttonV2.classList.add("js-hidden");
  form.classList.add("js-hidden");
  clueV2.classList.add("js-hidden");
  tryCountV2.classList.add("js-hidden");
}

function clickButtonHandler() {
  numberVerification();
  counter();
  helpButton();
}

//eventos

button.addEventListener("click", clickButtonHandler);
help.addEventListener("click", helpGiven);
console.log("El número es: " + randomNumberV2);
