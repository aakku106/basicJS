/** @format */

import { quiz } from "./question.js";
import { body, progressBar, header } from "./stylings.js";
import { timer, timerDiv, timerInterval } from "./timer.js";

export const startTest = () => {
  timer();
  header.append(timerDiv);
  let section = document.createElement("section");
  let pragraph = document.createElement("p");

  let bttn1 = document.createElement("button");
  let bttn2 = document.createElement("button");
  let bttn3 = document.createElement("button");
  let bttn4 = document.createElement("button");

  pragraph.innerHTML = `${quiz[0].question}`;

  bttn1.innerHTML = `${quiz[0].options[1]}`;
  bttn2.innerHTML = `${quiz[0].options[2]}`;
  bttn3.innerHTML = `${quiz[0].options[3]}`;
  bttn4.innerHTML = `${quiz[0].options[4]}`;

  section.append(bttn1);
  section.append(bttn2);
  section.append(bttn3);
  section.append(bttn4);
  body.append(pragraph);
  body.append(section);

  let i = 1;
  let interval = setInterval(() => {
    clearInterval(timerInterval);
    timer();
    header.append(timerDiv);
    progressBar.value = i;
    if (i > quiz.length - 1) {
      clearInterval(interval);
      return;
    }

    pragraph.innerHTML = `${quiz[i].question}`;
    bttn1.innerHTML = `${quiz[i].options[1]}`;
    bttn2.innerHTML = `${quiz[i].options[2]}`;
    bttn3.innerHTML = `${quiz[i].options[3]}`;
    bttn4.innerHTML = `${quiz[i].options[4]}`;
    section.append(bttn1);
    section.append(bttn2);
    section.append(bttn3);
    section.append(bttn4);
    body.append(pragraph);
    body.append(section);
    i++;
  }, 1000);
};
