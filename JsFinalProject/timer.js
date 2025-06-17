/** @format */
import { header } from "./stylings.js";
export let timerDiv = document.createElement("p");
const maxTime = 10;
timerDiv.style.display = "none";
export let timerInterval;

export const timer = () => {
  timerDiv.style.display = "block";
  timerDiv.innerHTML = `${maxTime}s`;
  let tempTime = maxTime;
  timerInterval = setInterval(() => {
    tempTime--;
    timerDiv.innerHTML = `${tempTime}s`;
  }, 999);
};
