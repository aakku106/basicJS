/** @format */
import { header } from "./stylings.js";
export let timerDiv = document.createElement("p");
const maxTime = 15;
timerDiv.style.display = "none";
export let timerInterval;

export const timer = () => {
  timerDiv.style.display = "block";
  timerDiv.innerHTML = `15s`;
  let tempTime = maxTime;
  timerInterval = setInterval(() => {
    tempTime--;
    timerDiv.innerHTML = `${tempTime}s`;
  }, 999);
};
header.append(timerDiv);
