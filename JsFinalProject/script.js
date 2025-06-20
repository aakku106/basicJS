/** @format */

import { quiz } from "./question.js";
import {
  body,
  header,
  progressBar,
  loader,
  pragraph,
  section,
  bttn1,
  bttn2,
  bttn3,
  bttn4,
} from "./stylings.js";
import { timer, timerDiv, timerInterval } from "./timer.js";

export const startTest = () => {
  let i = 0;
  let points = 0;
  timer();
  header.append(timerDiv);
  progressBar.value = 1;

  bttn1.addEventListener("click", handleAnswer);
  bttn2.addEventListener("click", handleAnswer);
  bttn3.addEventListener("click", handleAnswer);
  bttn4.addEventListener("click", handleAnswer);

  function handleAnswer(e) {
    loader.style.display = "block";
    section.style.display = "none";
    pragraph.style.display = "none";

    if (e.target.innerHTML === quiz[i].answer) {
      points++;
    }
  }

  updateQuestion();

  let interval = setInterval(() => {
    clearInterval(timerInterval);
    timer();
    header.append(timerDiv);

    i++;
    progressBar.value = i + 1;

    if (i >= quiz.length - 1) {
      clearInterval(interval);
      clearInterval(timerInterval);
      showResults();
      return;
    }

    updateQuestion();
  }, 600);

  function updateQuestion() {
    loader.style.display = "none";
    section.style.display = "block";
    pragraph.style.display = "block";

    pragraph.innerHTML = quiz[i].question;
    bttn1.innerHTML = quiz[i].options[1];
    bttn2.innerHTML = quiz[i].options[2];
    bttn3.innerHTML = quiz[i].options[3];
    bttn4.innerHTML = quiz[i].options[4];

    section.innerHTML = "";
    section.append(bttn1);
    section.append(bttn2);
    section.append(bttn3);
    section.append(bttn4);
    body.append(pragraph);
    body.append(section);
  }

  function showResults() {
    pragraph.innerHTML = `Quiz Complete! Your score: ${points} out of ${quiz.length}`;
    section.style = "none";
    bttn1.style.display = "none";
    bttn2.style.display = "none";
    bttn3.style.display = "none";
    bttn4.style.display = "none";
    timerDiv.style.display = "none";
    loader.style.display = "none";
  }
};
