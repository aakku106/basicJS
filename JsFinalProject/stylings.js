import { startTest } from "./script.js";
export const body = document.getElementById("section");
export const header = document.getElementById("header");
export const progressBar = document.createElement("progress");
export const loader = document.getElementById("loader");

export let section = document.createElement("section");
export let pragraph = document.createElement("p");

export let bttn1 = document.createElement("button");
export let bttn2 = document.createElement("button");
export let bttn3 = document.createElement("button");
export let bttn4 = document.createElement("button");

progressBar.max = 10;
progressBar.value = 0;

progressBar.style.display = "none";
body.style.display = "none";
loader.style.display = "none";
header.style.marginTop = "12vh";

export let startingMessage = document.createElement("p");
export let tempStartButtn = document.createElement("button");

startingMessage.innerHTML = "10 Questions 10 points Ready for the Challange ?";
tempStartButtn.innerHTML = "Start TEST !!!";

tempStartButtn.style.marginTop = "2rem";

startingMessage.style.fontSize = "4em";
header.style.height = "max-content";

header.append(startingMessage);
header.append(tempStartButtn);

tempStartButtn.addEventListener("click", () => {
  progressBar.style.display = "block";
  body.style.display = "block";
  header.style.marginTop = "0";
  header.innerHTML = "";
  header.style.height = "15vh";
  tempStartButtn.innerHTML = "";
  startingMessage.innerHTML = "";
  tempStartButtn.style.display = "none";
  startingMessage.style.display = "none";
  header.append(progressBar);
  startTest();
});
