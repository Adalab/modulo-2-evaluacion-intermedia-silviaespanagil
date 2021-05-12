"use strict";

//para el evento load clase body .js-body

const button = document.querySelector(".js-button");

function getRandomNumber() {
  const randomNumber = Math.ceil(Math.random() * 100);
  return console.log(randomNumber);
}
window.addEventListener("load", getRandomNumber);
