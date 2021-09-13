"use strict";

const btn1 = document.querySelector(".btn--1");
const btn2 = document.querySelector(".btn--2");
const btn3 = document.querySelector(".btn--3");
const btn4 = document.querySelector(".btn--4");

btn1.addEventListener("click", function () {
  btn1.classList.toggle("toggle");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    btn2.classList.toggle("visible");
  }
});
btn3.addEventListener("mouseover", function () {
  btn1.classList.toggle("toggle");
  btn2.classList.toggle("toggle-2");
  btn3.classList.toggle("toggle-3");
  btn4.classList.toggle("height");
});
window.addEventListener("load", function () {
  btn4.classList.toggle("toggle-4");
  console.log("Page is loaded");
});
